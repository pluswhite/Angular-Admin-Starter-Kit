import { Injectable } from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';

@Injectable()
export class RegisterService {

  private _registerData: RegisterData = <RegisterData>{};

  constructor(
    private _tokenService: Angular2TokenService
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
                  },
                  error => {
                    console.log(error);
                    this._registerData = <RegisterData>{};
                  }
                );
  };
}
