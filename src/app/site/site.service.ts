import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class SiteService {

  constructor(
    private router: Router,
    private _tokenService: Angular2TokenService
  ) {

  }

  checkLogin() {
    if (this._tokenService.currentUserData != null) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  doLogin(data) {
    return this._tokenService
      .signIn({
        email: data.email,
        password: data.password,
        userType: 'ADMIN'
      });
  };

  doRegister(data) {
    return this._tokenService
      .registerAccount({
        email: data.email,
        password: data.password,
        passwordConfirmation: data.repeatPassword
      });
  };
}
