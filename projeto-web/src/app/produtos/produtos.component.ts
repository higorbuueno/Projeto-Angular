import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Noticia } from '../shared/dto/noticia-dto';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pizzasService: PizzasService,
    private router: Router
  ) {}

  noticias: Noticia[] = [];
  // Pagination
  p: number = 1;

  // Tamanho do campo para edição
  numeroCaracteres: number = 350;

  // Tipos
  tipos: any[] = [];

  // Plataformas
  plataformas: any[] = [];

  // Formulário
  formulario: FormGroup = this.formBuilder.group({
    id: [null],
    titulo: [null, Validators.required],
    texto: [null, Validators.required],
    tipo: [null, Validators.required],
    plataforma: [null, Validators.required],
    imagem: [null]
  });

  // Verificação para ver se o formulário já foi enviado e poder formatá-lo
  formularioEnviado: boolean = false;

  ngOnInit(): void {
    this.verificarLogin();
    this.getAllTipos();
    this.getAllPlataformas();
    this.getAllNoticias();
  }

  verificarLogin(){
    var usuario: any = sessionStorage.getItem('usuario');
    if(!usuario){
      this.router.navigate(['login'])
    } 
  }

  verificarTipo(id: number){
    return this.tipos.filter(tipo => tipo.id === id)[0].descricao
  }

  verificarPlataforma(id: number){
    return this.plataformas.filter(plataforma => plataforma.id === id)[0].nome
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

  getAllNoticias() {
    this.pizzasService.getAll().subscribe(
      (response) => {
        this.noticias = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }

  getAllTipos() {
    this.pizzasService.getAllTipoNoticias().subscribe(
      (response) => {
        this.tipos = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }

  preencherCamposParaEdicao(produto: any) {
    this.formulario.controls['id'].setValue(produto.id);
    this.formulario.controls['titulo'].setValue(produto.titulo);
    this.formulario.controls['tipo'].setValue(produto.tipo);
    this.formulario.controls['texto'].setValue(produto.texto);
    this.formulario.controls['plataforma'].setValue(produto.plataforma);
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      // SE O ID ESTIVER PREENCHIDO ELE VAI EDITAR!
      if (this.formulario.value.id) {
        this.pizzasService
          .update(this.formulario.value)
          .subscribe(
            (response) => {
              this.toastr.success('Noticia atualizada!', 'Salvo!');
            },
            (error) => {
              this.toastr.error(error.text, 'Algum erro');
            }
          )
          .add(() => {
            this.getAllNoticias();
          });
      }
      // SE O ID ESTIVER VAZIO ELE VAI CRIAR!
      else {
        this.pizzasService
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
            this.getAllNoticias();
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
          this.getAllNoticias();
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
