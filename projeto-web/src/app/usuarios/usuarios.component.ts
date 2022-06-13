import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcao } from '../shared/dto/funcao-dto';
import { Setor } from '../shared/dto/setor-dto';
import { Usuario } from './dto/usuario-dto';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  usuarios: Usuario[] = [];

  funcoes: Funcao[] = [];

  // Pagination
  p: number = 1;

  // Formulário
  formulario: FormGroup = this.formBuilder.group({
    id: [null],
    nome: [null, Validators.required],
    funcao: [null, Validators.required],
    senha: [null, Validators.required],
  });

  // Verificação para ver se o formulário já foi enviado e poder formatá-lo
  formularioEnviado: boolean = false;

  ngOnInit(): void {
    this.verificarLogin();
    this.loadCargos();
    this.loadUsuarios();
  }

  verificarLogin(){
    var usuario: any = sessionStorage.getItem('usuario');
    if(!usuario){
      this.router.navigate(['login'])
    } 
  }

  verificarCargo(id: number){
    return this.funcoes.filter(funcao => funcao.id === id)[0].nome;

  }

  loadCargos() {
    this.usuariosService.getAllCargos().subscribe(
      cargos => {
        this.funcoes = cargos;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  loadUsuarios() {
    this.usuariosService.getAll().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  preencherCamposParaEdicao(usuario: any) {
    this.formulario.controls['id'].setValue(usuario.id);
    this.formulario.controls['nome'].setValue(usuario.nome);
    this.formulario.controls['senha'].setValue(usuario.senha);
    this.formulario.controls['funcao'].setValue(usuario.funcao);
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      // SE O ID ESTIVER PREENCHIDO ELE VAI EDITAR!
      if (this.formulario.value.id) {
        this.usuariosService
          .update(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Usuario atualizado!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.loadUsuarios();
          });
      }
      // SE O ID ESTIVER VAZIO ELE VAI CRIAR!
      else {
        this.usuariosService
          .create(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Nova noticia salva!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.loadUsuarios();
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
      this.usuariosService
        .delete(this.formulario.value.id)
        .subscribe(
          () => {
            this.toastr.success('Deletado com sucesso.', 'Deletado!');
          },
          (error) => {
            this.toastr.error(error.text, 'Algum erro');
          }
        )
        .add(() => {
          this.loadUsuarios();
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
