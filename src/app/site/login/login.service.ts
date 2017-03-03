import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class LoginService {

  constructor(
    private _tokenService: Angular2TokenService
  ) { }


}
