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
      this.cards = result;
    })
  }

  getAllNoticias(){
    this.pizzasService.getAllNoticias().subscribe(result => {
      this.noticias = result;
    })
  }
}
