import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-profile-report',
  templateUrl: './profile-report.component.html',
  styleUrls: ['./profile-report.component.sass']
})
export class ProfileReportComponent implements OnInit {

  @Input()
  title: string = '';
  @Input()
  year: string = '';
  @Input()
  amount: string = '0';
  @Input()
  percent: string = '0';
  @Input()
  positive: boolean = true;

  chart: any;

  ngOnInit(): void {
    this.chart = new Chart("MyChart3", {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          data: [110, 270, 145, 245, 205, 285],
          fill: false,
          borderColor: 'rgb(243, 146, 0)',
          tension: 0.4
        }]
      },
      options: {
        /* elements: {
          point: {
            radius: 0
          }
        }, */
        scales: {
          x: {
            grid: {
              display: false,
              drawOnChartArea: false
            },
            ticks: {
              display: false
            },
            display: false
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              display: false
            },
            display: false
          },
        },
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
      }
    });
  }

  getClasses(): string {
    return (this.positive ? "text-success fw-semibold" : "text-danger fw-semibold") + "text-nowrap fw-semibold";
  }

  getIcon(): string {
    return this.positive ? "bx bx-up-arrow-alt" : "bx bx-down-arrow-alt"
  }

  getPercent(): string {
    return this.positive ? `+${this.percent}%` : `-${this.percent}%`;
  }

}