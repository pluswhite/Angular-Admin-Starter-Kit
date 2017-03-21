import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class UsersService {

  public requestUrl = "users"

  constructor(
    public http: Http,
    private _tokenService: Angular2TokenService
  ) { }

  getUserListData() {
    return this._tokenService
      .get(this.requestUrl);
  }

  addUser(userData) {
    // console.log(userData);
    return this._tokenService.post(this.requestUrl, {
      userData
    });
  }

  doDeleteUser(user) {
    return this._tokenService.delete(this.requestUrl + '/' + user.id);
  }

  getUser(id) {
    // let
    //   getUserReqUrl = this.userRequestUrl + "/" + id;
    // console.log(userData);
    // return this._tokenService.get(getUserReqUrl);
    let
      userRequestUrl = "/mock-data/user-info-mock.json";
    return this.http.get(userRequestUrl)
      .map(res => res.json());
  }
}
