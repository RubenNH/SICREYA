import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SICREYAComponent } from './sicreya.component';
import { EarningsGraphCardComponent } from './components/earnings-graph-card/earnings-graph-card.component';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    SICREYAComponent,
    EarningsGraphCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class SICREYAModule { }
