import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) 'elemento': ElementRef;

  semana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ]

  qtyNoticias = [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58];
  qtyArtigos = [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4];

  ngOnInit() {
    this.loadChart();
  }

  loadChart(){
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: this.semana,
        datasets: [
          {
            data: this.qtyNoticias,
            borderColor: '#00AEFF',
            fill: false,
            label: 'Noticias'
          },
          {
            data: this.qtyArtigos,
            borderColor: '#FFCC00',
            fill: false,
            label: 'Artigos'
          },
        ],
      }
    });
  }
}
