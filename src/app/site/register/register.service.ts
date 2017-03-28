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
        password: data.password,
        passwordConfirmation: data.repeatPassword
      });
  };
}
