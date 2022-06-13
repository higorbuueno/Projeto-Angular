import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'node_modules/chart.js';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) 'elemento': ElementRef;

  constructor(
    private pizzasService: PizzasService,
    private toastr: ToastrService
  ) {}

  semana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];

  qtyNoticias = [];
  qtyArtigos = [];
  qtyReviews = [];

  ngOnInit() {
    this.carregarGrafico();
  }
  
  carregarGrafico() {
    this.pizzasService.getInformacoesParaGrafico().subscribe(
      (response) => {
        this.qtyArtigos = response.artigos;
        this.qtyNoticias = response.noticias;
        this.qtyReviews = response.reviews;
      },
      (error) => {
        this.toastr.error(error.error.text);
      }
    ).add(() => {

      new Chart(this.elemento.nativeElement, {
        type: 'line',
        data: {
          labels: this.semana,
          datasets: [
            {
              data: this.qtyNoticias,
              borderColor: '#00AEFF',
              fill: false,
              label: 'Noticias',
            },
            {
              data: this.qtyArtigos,
              borderColor: '#FFCC00',
              fill: false,
              label: 'Artigos',
            },
            {
              data: this.qtyReviews,
              borderColor: '#59EB5E',
              fill: false,
              label: 'Reviews',
            },
          ],
        },
      });

    });
  }
}
