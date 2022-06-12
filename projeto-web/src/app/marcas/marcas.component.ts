import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {


  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pizzasService: PizzasService
  ) {}

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
    nome: [null, Validators.required]
  });

  // Verificação para ver se o formulário já foi enviado e poder formatá-lo
  formularioEnviado: boolean = false;

  ngOnInit(): void {
    this.getAllMarcas();
  }

  getAllMarcas() {
    this.pizzasService.getAllMarcas().subscribe(
      (response) => {
        this.marcas = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }


  preencherCamposParaEdicao(marca: any) {
    this.formulario.controls['id'].setValue(marca.id);
    this.formulario.controls['nome'].setValue(marca.nome);
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      // SE O ID ESTIVER PREENCHIDO ELE VAI EDITAR!
      if (this.formulario.value.id) {
        this.pizzasService
          .updateMarca(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Marca atualizada!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllMarcas();
          });
      }
      // SE O ID ESTIVER VAZIO ELE VAI CRIAR!
      else {
        this.pizzasService
          .createMarca(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Nova marca salva!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllMarcas();
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
        .deleteMarca(this.formulario.value.id)
        .subscribe(
          () => {
            this.toastr.success('Deletado com sucesso.', 'Deletado!');
          },
          (error) => {
            this.toastr.error(error.text, 'Algum erro');
          }
        )
        .add(() => {
          this.getAllMarcas();
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
