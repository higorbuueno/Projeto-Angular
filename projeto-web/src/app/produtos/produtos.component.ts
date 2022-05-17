import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from '../shared/dto/pizza-dto';
import { PizzasService } from '../shared/services/pizza.service';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pizzasService: PizzasService) { }

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

  pizzas: Pizza[] = [];
  // Pagination
  p: number = 1;

  // Formulário
  formulario: FormGroup = this.formBuilder.group({
    id: [0, Validators.required],
    sabor: [null, Validators.required],
    valor: [null, Validators.required]
  });

  // Verificação para ver se o formulário já foi enviado e poder formatá-lo
  formularioEnviado: boolean = false;

  ngOnInit(): void {
    this.getAllPizzas();
  }

  getAllPizzas(){
    this.pizzasService.getAllPizzas().subscribe(response => {
      this.pizzas = response;
    }, error => {
      this.toastr.error(error.error.text)
    });
  }

  preencherCamposParaEdicao(produto: any) {
    this.formulario.controls['id'].setValue(produto.id);
    this.formulario.controls['sabor'].setValue(produto.sabor);
    this.formulario.controls['valor'].setValue((produto.valor).toString());
  }

  onSave() {
    // Colocando formulário como enviado.
    this.formularioEnviado = true;

    if (this.formulario.valid) {
      this.pizzasService.updatePizza(this.formulario.value).subscribe(response => {
        this.toastr.success('Alterações feitas!', 'Salvo!');
        console.log(response);
      }, error => {
        this.toastr.error(error.text, 'Algum erro');
      })
      
      // Colocando formulário como NÃO enviado.
      this.formularioEnviado = false;
    } else {
      this.toastr.warning('Verifique os campos em destaque', 'Dados inváliods!');
    }
  }

  onCancel() {
    // Limpando formulario
    this.formulario = this.formBuilder.group({
      id: [0, Validators.required],
      sabor: [null, Validators.required],
      valor: [null, Validators.required]
    });

    // Colocando formulário como não enviado.
    this.formularioEnviado = false;
  }
}
