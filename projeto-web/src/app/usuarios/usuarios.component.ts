import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder) { }

  usuarios: {
    id: number;
    nome: string;
    funcao: { id: number, nome: string };
    setor: { id: number, nome: string };
  }[] = [
      { id: 1, nome: 'Higor', funcao: { id: 1, nome: 'CEO' }, setor: { id: 1, nome: 'Admistrativo' } },
      { id: 2, nome: 'Maicon', funcao: { id: 2, nome: 'Gerente' }, setor: { id: 2, nome: 'Produção' } },
      { id: 3, nome: 'Igor Doné', funcao: { id: 2, nome: 'Gerente' }, setor: { id: 3, nome: 'Geral' } },
      { id: 4, nome: 'João JPK', funcao: { id: 4, nome: 'Cozinheiro' }, setor: { id: 4, nome: 'Refeitório' } },
      { id: 5, nome: 'João JPK', funcao: { id: 4, nome: 'Cozinheiro' }, setor: { id: 4, nome: 'Refeitório' } },
      { id: 6, nome: 'João JPK', funcao: { id: 2, nome: 'Gerente' }, setor: { id: 1, nome: 'Admistrativo' } },
      { id: 7, nome: 'João JPK', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
      { id: 8, nome: 'João JPK', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
      { id: 9, nome: 'João JPK', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
      { id: 10, nome: 'João JPK', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
      { id: 11, nome: 'a', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
      { id: 12, nome: 'a', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
      { id: 13, nome: 'a', funcao: { id: 3, nome: 'Auxiliar' }, setor: { id: 2, nome: 'Produção' } },
    ];

  setores: {
    id: number;
    nome: string;
  }[] = [
      { id: 1, nome: 'Admistrativo' },
      { id: 2, nome: 'Produção' },
      { id: 3, nome: 'Geral' },
      { id: 4, nome: 'Refeitório' },
    ];

  funcoes: {
    id: number;
    nome: string;
  }[] = [
      { id: 1, nome: 'CEO' },
      { id: 2, nome: 'Gerente' },
      { id: 3, nome: 'Auxiliar' },
      { id: 4, nome: 'Cozinheiro' },
    ];

  // Pagination
  p: number = 1;

  // Formulário
  formulario: FormGroup = this.formBuilder.group({
    idColaborador: [0, Validators.required],
    nome: [null, Validators.required],
    funcao: [null, Validators.required],
    setor: [null, Validators.required]
  });

  // Verificação para ver se o formulário já foi enviado e poder formatá-lo
  formularioEnviado: boolean = false;

  ngOnInit(): void {
  }

  preencherCamposParaEdicao(usuario: any) {
    this.formulario.controls['idColaborador'].setValue(usuario.id);
    this.formulario.controls['nome'].setValue(usuario.nome);
    this.formulario.controls['funcao'].setValue(usuario.funcao.id);
    this.formulario.controls['setor'].setValue(usuario.setor.id);
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      this.toastr.success('Alterações feitas!', 'Salvo!');
      // Colocando formulário como NÃO enviado.
      this.formularioEnviado = false;
    } else {
      this.toastr.warning('Verifique os campos em destaque', 'Dados inváliods!');
    }
  }

  onCancel() {
    // Limpando formulario
    this.formulario = this.formBuilder.group({
      idColaborador: [0, Validators.required],
      nome: [null, Validators.required],
      funcao: [null, Validators.required],
      setor: [null, Validators.required]
    });

    // Colocando formulário como não enviado.
    this.formularioEnviado = false;
  }
}
