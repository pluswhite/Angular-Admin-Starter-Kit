import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService, RegisterData } from 'angular2-token';

@Injectable()
export class RegisterService {

  private _registerData: RegisterData = <RegisterData>{};

  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router
  ) { }

  doRegister (data) {
    return this._tokenService
                .registerAccount({
                  email: data.email,
                  password: data.passwords.password,
                  passwordConfirmation: data.passwords.repeatPassword
                })
                .subscribe(
                  res => {
                    console.log(res);
                    this._registerData = <RegisterData>{};
                    this.router.navigate(['/site/login']);
                  },
                  error => {
                    console.log(error);
                    this._registerData = <RegisterData>{};
                  }
                );
  };
}
