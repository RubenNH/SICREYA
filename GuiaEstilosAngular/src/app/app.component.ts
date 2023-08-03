import { Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'SistemaInternoWurth';

  constructor (private service: ScriptService) {}
  
  ngOnInit(): void {
    this.service.load('main').then(data => {
      console.log('script loaded', data);
    }).catch(error => console.log(error));
  }
}
