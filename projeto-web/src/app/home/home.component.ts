import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any[] = [];
  noticias: any[] = [];
  
  // Paginação
  paginaNoticia: number = 1;
  paginaCard: number = 1;

  constructor(
    private pizzasService: PizzasService
  ) { }

  ngOnInit(): void {
    this.getAllCards();
    this.getAllNoticias();
  }

  getAllCards(){
    this.pizzasService.getAllCards().subscribe(result => {
      result.forEach(element => {
        var modificacao = element.modificacao
        var ano = modificacao.substring(0,4);
        var mes = modificacao.substring(5,7);
        var dia = modificacao.substring(8,10);
        var hora = modificacao.substring(11,13);
        var minuto = modificacao.substring(14,16);
        element.modificacao = `${dia}/${mes}/${ano}, ${hora}:${minuto} UTC`
      });
      this.cards = result;
    })
  }

  getAllNoticias(){
    this.pizzasService.getAllNoticias().subscribe(result => {
      result.forEach(element => {
        var modificacao = element.modificacao
        var ano = modificacao.substring(0,4);
        var mes = modificacao.substring(5,7);
        var dia = modificacao.substring(8,10);
        var hora = modificacao.substring(11,13);
        var minuto = modificacao.substring(14,16);
        element.modificacao = `${dia}/${mes}/${ano}, ${hora}:${minuto} UTC`
      });
      this.noticias = result;
    })
  }
}
