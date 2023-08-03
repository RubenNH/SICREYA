import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthModule } from './auth/auth.module';
import { SICREYAModule } from './sicreya/sicreya.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    LayoutsModule,
    SICREYAModule,
    AuthModule
  ]
})
export class ModulesModule { }
