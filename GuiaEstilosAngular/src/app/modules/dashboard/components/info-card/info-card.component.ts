import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.sass']
})
export class InfoCardComponent {

  @Input()
  title: string = '';
  @Input()
  amount: string = '0';
  @Input()
  percent: string = '0';
  @Input()
  img: string = '0';
  @Input()
  positive: boolean = true;

  getImage(): string {
    var img = "../../../../assets/img/icons/unicons/";
    switch(this.img) {
      case '1': {
        img += "chart-success.png";
        break;
      }
      case '2': {
        img += "wallet-info.png";
        break;
      }
      case '3': {
        img += "paypal.png";
        break;
      }
      case '4': {
        img += "cc-primary.png";
        break;
      }
    }
    return img;
  }

  getClass(): string {
    return this.positive ? "text-success fw-semibold" : "text-danger fw-semibold";
  }

  getIcon(): string {
    return this.positive ? "bx bx-up-arrow-alt" : "bx bx-down-arrow-alt"
  }

  getPercent(): string {
    return this.positive ? `+${this.percent}%` : `-${this.percent}%`;
  }

}
