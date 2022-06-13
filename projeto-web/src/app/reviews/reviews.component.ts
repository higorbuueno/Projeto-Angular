import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  constructor(
    private pizzasService: PizzasService,
    private toastr: ToastrService
  ) {}

  // Pagination
  p: number = 1;

  //Conteúdo da página
  conteudos: any[] = [];

  ngOnInit(): void {
    this.getConteudos();
  }

  getConteudos() {
    this.pizzasService.getAllReviews().subscribe(
      (response) => {
        this.conteudos = response;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    );
  }
}
