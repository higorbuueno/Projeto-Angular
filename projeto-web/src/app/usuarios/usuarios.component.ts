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
    private formBuilder: FormBuilder) {}

  usuarios: {
    id: number;
    nome: string;
    funcao: string;
    setor: string;
  }[] = [
    { id: 1, nome: 'Higor', funcao: 'CEO', setor: 'Administrativo' },
    { id: 2, nome: 'Maicon', funcao: 'Gerente', setor: 'Produção' },
    { id: 3, nome: 'Igor Doné', funcao: 'Auxiliar de Limpeza', setor: 'Geral' },
    { id: 4, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 5, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 6, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 7, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 8, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 9, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 10, nome: 'João JPK', funcao: 'Cozinheiro', setor: 'Refeitório' },
    { id: 11, nome: 'Paginação', funcao: 'Paginação', setor: 'Paginação' },
    { id: 12, nome: 'Paginação', funcao: 'Paginação', setor: 'Paginação' },
    { id: 13, nome: 'Paginação', funcao: 'Paginação', setor: 'Paginação' },
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
    { id: 3, nome: 'Auxiliar de Limpeza' },
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
  formularioEnviado: boolean = false;

  ngOnInit(): void {
  }

  preencherCamposParaEdicao(usuario: any){
    this.formulario.controls['idColaborador'].setValue(usuario.id);
    this.formulario.controls['nome'].setValue(usuario.nome);
    this.formulario.controls['funcao'].setValue(usuario.funcao);
    this.formulario.controls['setor'].setValue(usuario.setor);
  }

  onSave(){
    // Colocando formulário como enviado.
    this.formularioEnviado = true;
    
    if(this.formulario.valid){
      this.toastr.success('Alterações feitas!', 'Salvo!');
      // Colocando formulário como NÃO enviado.
      this.formularioEnviado = false;
    } else{
      this.toastr.warning('Verifique os campos em destaque', 'Dados inváliods!');
    }
  }

  onCancel(){
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
