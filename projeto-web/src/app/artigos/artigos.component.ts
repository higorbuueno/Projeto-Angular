import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  constructor(
    private pizzasService: PizzasService,
    private toastr: ToastrService
    ) { }

  // Pagination
  p: number = 1;

  //Conteúdo da página
  conteudos: any[] = [];

  ngOnInit(): void {
    this.getConteudos();
  }

  getConteudos(){
    this.pizzasService.getAllArtigos().subscribe(response => {
      this.conteudos = response;
    }, error => {
      this.toastr.error(error.error.text);
    })
  }

}
