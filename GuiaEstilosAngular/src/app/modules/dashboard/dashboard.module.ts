import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { EarningsGraphCardComponent } from './components/earnings-graph-card/earnings-graph-card.component';
import { ProfileReportComponent } from './components/profile-report/profile-report.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeCardComponent,
    InfoCardComponent,
    EarningsGraphCardComponent,
    ProfileReportComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
