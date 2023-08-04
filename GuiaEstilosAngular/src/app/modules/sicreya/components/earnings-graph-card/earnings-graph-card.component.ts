import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-earnings-graph-card',
  templateUrl: './earnings-graph-card.component.html',
  styleUrls: ['./earnings-graph-card.component.sass']
})
export class EarningsGraphCardComponent implements OnInit {
  @Input()
  titlePage: string = 'COBRANZA';
  periodMonth: string = 'Agosto';
  periodYear: string = '2023';
  valorCob: string = '41.2';
  valorObM: string = '32.5';
  valorAlc: string = '79.3%';
  valorMsI: string = '1500';
  rojo: string = '#CC0000';
  azul: string = '#0093DD';
  naranja: string = '#FFA500';
  avatars: string[] = ['1', '2', '3']
  people: any[] = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
    // Add more data as needed
  ];
  chart: any;
  chart2: any;
  barChart: any;

  ngOnInit(): void {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul'
        ],
        datasets: [{
          label: 'COBRO OBTENIDO',
          data: [18, 7, 15, 29, 18, 12, 9],
          backgroundColor: '#0093DD',
          barThickness: 12,
          borderRadius: 35,
        }, {
          label: 'OBJETIVO',
          data: [13, 18, 9, 14, 5, 17, 15],
          backgroundColor: 'rgb(204, 0, 0)',
          barThickness: 12,
          borderRadius: 35,
        }]
      },
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            },
            
          },
          y: {
            ticks: {
              stepSize: 10
            },
            beginAtZero: true
          }
        }
      }
    });
    this.chart2 = new Chart("MyChart2", {
      type: 'doughnut',
      data: {
        labels: [
          'ALCANCE','OBJETIVO'
        ],
        datasets: [{
          label: 'Ingresos',
          data: [650000.2, 890700.5],
          backgroundColor: [
            '#0093DD',
            '#DBDBDB',
          ],
          
        }],
      },
      options: {
        cutout: 5,
        aspectRatio: 2,
      }
    });
    //barra en horizontal
    

  }
}