import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BlankComponent } from './modules/layouts/blank/blank.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SICREYAComponent } from './modules/sicreya/sicreya.component'

const routes: Routes = [
  {
    path: '',
    component: SICREYAComponent
  },
  {
    path: 'exampple',
    component: DashboardComponent
  },
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
