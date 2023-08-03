import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.sass']
})
export class OrderDetailsComponent implements OnInit {

  @Input()
  title: string = '';
  @Input()
  amount: string = '';
  @Input()
  total: string = '';

  chart: any;

  ngOnInit(): void {
    this.chart = new Chart("MyChart4", {
      type: 'doughnut',
      data: {
        labels: [
          'Electrónicos', 'Moda', 'Decor.', 'Deportes'
        ],
        datasets: [{
          label: 'ventas',
          data: [85, 50, 50, 15],
          backgroundColor: [
            'rgb(204, 0, 0)',
            'rgb(186, 196, 5)',
            'rgb(0, 147, 221)',
            'rgb(149, 149, 149)'
          ],
          borderColor: [
            'rgb(204, 0, 0)',
            'rgb(186, 196, 5)',
            'rgb(0, 147, 221)',
            'rgb(149, 149, 149)'
          ],
          
        }],
      },
      options: {
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          },
        },
      },
    });
  }

}
