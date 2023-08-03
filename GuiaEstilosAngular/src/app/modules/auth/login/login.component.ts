import { Component } from '@angular/core';

import { UserLoginModel } from './models/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {

  user: UserLoginModel = {};

  login() {
    if (this.user.username && this.user.password) {
      var tmp = this.user.username + this.user.password;
      localStorage.setItem('token', btoa(tmp));
      window.location.reload();
    }
  }
  
}
