import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class UserListService {

  public requestUrl = "users"

  constructor(
    private _tokenService: Angular2TokenService
  ) { }

  getUserListData() {
    return this._tokenService
      .get(this.requestUrl);
  }
}
