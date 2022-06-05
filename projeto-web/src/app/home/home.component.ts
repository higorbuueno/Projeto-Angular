import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lembretes: any[] = [];

  constructor(
    private pizzasService: PizzasService
  ) { }

  ngOnInit(): void {
    this.getAllLembretes();
  }

  getAllLembretes(){
    this.pizzasService.getAll().subscribe(result => {
      this.lembretes = result;
    })
  }
}
