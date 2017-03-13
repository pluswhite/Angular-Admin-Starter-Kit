import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class LoginService {

  constructor(
    private _toastyService: ToastyService,
    private _toastyConfig: ToastyConfig,
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

    this._toastyService.wait({
      title: "Loging...",
      msg: "Trying to log in ..., Please wait.",
      showClose: false,
      timeout: 15000
    });

    this._tokenService
      .signIn({
        email: data.email,
        password: data.password
      })
      .subscribe(
        res => {
          this._toastyService.clearAll();
          this._toastyService.success({
            title: "Success!",
            msg: "Login successfully.",
            showClose: false,
            timeout: 3000,
            onRemove: function(toast: ToastData) {
              that.router.navigate(['/admin/dashboard']);
            }
          });
        },
        error => {
          console.log(error);
          this._toastyService.clearAll();
          this._toastyService.error({
            title: "Error!",
            msg: "Some error occurs! Please try again.",
            showClose: false,
            timeout: 3000
          });
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
