import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pizzasService: PizzasService
  ) {}

  
  plataformas: any[] = [];
  marcas: any[] = [];
  
  // Pagination
  p: number = 1;

  // Tamanho do campo para edição
  numeroCaracteres: number = 140;

  // Tipos
  tipos: any[] = [];

  // Formulário
  formulario: FormGroup = this.formBuilder.group({
    id: [null],
    nome: [null, Validators.required],
    tipo: [null, Validators.required],
    marca: [null, Validators.required]
  });

  // Verificação para ver se o formulário já foi enviado e poder formatá-lo
  formularioEnviado: boolean = false;

  ngOnInit(): void {
    this.getAllMarcas();
    this.getAllPlataformas();
    this.getAllTipos();
  }

  getAllTipos(){
    this.pizzasService.getAllTipoNoticias().subscribe(
      (response) => {
        this.tipos = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }

  getAllMarcas(){
    this.pizzasService.getAllMarcas().subscribe(
      (response) => {
        this.marcas = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }

  getAllPlataformas() {
    this.pizzasService.getAllPlataformas().subscribe(
      (response) => {
        this.plataformas = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }


  preencherCamposParaEdicao(plataforma: any) {
    this.formulario.controls['id'].setValue(plataforma.id);
    this.formulario.controls['nome'].setValue(plataforma.nome);
    this.formulario.controls['tipo'].setValue(plataforma.tipo);
    this.formulario.controls['marca'].setValue(plataforma.marca);
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      // SE O ID ESTIVER PREENCHIDO ELE VAI EDITAR!
      if (this.formulario.value.id) {
        this.pizzasService
          .updatePlataforma(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Plataforma atualizada!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllPlataformas();
          });
      }
      // SE O ID ESTIVER VAZIO ELE VAI CRIAR!
      else {
        this.pizzasService
          .createPlataforma(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Nova plataforma salva!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllPlataformas();
          });
      }
      // Colocando formulário como NÃO enviado.
      this.formularioEnviado = false;
    } else {
      this.toastr.warning(
        'Verifique os campos em destaque',
        'Dados inválidos!'
      );
    }
  }

  onClear() {
    // Limpando formulario
    this.formulario.reset();

    // Colocando formulário como não enviado.
    this.formularioEnviado = false;
  }

  onDelete() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      this.pizzasService
        .deletePlataforma(this.formulario.value.id)
        .subscribe(
          () => {
            this.toastr.success('Deletado com sucesso.', 'Deletado!');
          },
          (error) => {
            this.toastr.error(error.text, 'Algum erro');
          }
        )
        .add(() => {
          this.getAllPlataformas();
          this.onClear();
        });
    } else {
      this.toastr.warning(
        'Verifique os campos em destaque',
        'Dados inváliods!'
      );
    }
  }

}
