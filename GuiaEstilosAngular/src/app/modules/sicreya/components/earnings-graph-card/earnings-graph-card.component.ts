import { Component, Input, OnInit } from '@angular/core';

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
          label: '2023',
          data: [18, 7, 15, 29, 18, 12, 9],
          borderColor: 'rgb(204, 0, 0)',
          backgroundColor: 'rgb(204, 0, 0)',
          barThickness: 12,
          borderRadius: 35,
        }, {
          label: '2022',
          data: [-13, -18, -9, -14, -5, -17, -15],
          borderColor: 'rgb(0, 147, 221)',
          backgroundColor: 'rgb(0, 147, 221)',
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
          '2023', 'OBJETIVO'
        ],
        datasets: [{
          label: 'Ingresos',
          data: [41.2, 32.5],
          backgroundColor: [
            'rgb(204, 0, 0)',
            'rgb(0, 147, 221)',
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