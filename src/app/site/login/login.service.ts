import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class LoginService {

  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router
  ) { }

  checkLogin() {
    if (this._tokenService.currentUserData !== null) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  doLogin(data) {
    var
      that = this;

    this._tokenService
      .signIn({
        email: data.email,
        password: data.password
      })
      .subscribe(
        res => {
          that.router.navigate(['/admin/dashboard']);
        },
        error => {
          console.log(error);
        }
      );
  };

  doLogout() {
    return this._tokenService
      .signOut()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/site/login']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
