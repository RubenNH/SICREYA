import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js/auto';



@Component({
  selector: 'app-earnings-graph-card',
  templateUrl: './earnings-graph-card.component.html',
  styleUrls: ['./earnings-graph-card.component.sass']
})
export class EarningsGraphCardComponent implements OnInit {
  @Input()
  title: string = '';

  chart: any;
  chart2: any;

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
          '2023', '2022'
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
        aspectRatio: 2
      }
    });
  }

}