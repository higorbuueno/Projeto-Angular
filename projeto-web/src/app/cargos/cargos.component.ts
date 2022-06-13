import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pizzasService: PizzasService,
    private router: Router
  ) {}

  cargos: any[] = [];
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
    this.verificarLogin();
    this.getAllCargos();
  }

  verificarLogin(){
    var usuario: any = sessionStorage.getItem('usuario');
    if(!usuario){
      this.router.navigate(['login'])
    } 
  }

  getAllCargos() {
    this.pizzasService.getAllCargos().subscribe(
      (response) => {
        this.cargos = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }


  preencherCamposParaEdicao(cargo: any) {
    this.formulario.controls['id'].setValue(cargo.id);
    this.formulario.controls['nome'].setValue(cargo.nome);
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      // SE O ID ESTIVER PREENCHIDO ELE VAI EDITAR!
      if (this.formulario.value.id) {
        this.pizzasService
          .updateCargo(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Cargo atualizada!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllCargos();
          });
      }
      // SE O ID ESTIVER VAZIO ELE VAI CRIAR!
      else {
        this.pizzasService
          .createCargo(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Nova cargo salva!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllCargos();
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
        .deleteCargo(this.formulario.value.id)
        .subscribe(
          () => {
            this.toastr.success('Deletado com sucesso.', 'Deletado!');
          },
          (error) => {
            this.toastr.error(error.text, 'Algum erro');
          }
        )
        .add(() => {
          this.getAllCargos();
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
