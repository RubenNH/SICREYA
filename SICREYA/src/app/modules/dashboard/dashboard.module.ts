import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GeneralControlComponent } from './general-control/general-control.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GeneralControlComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
