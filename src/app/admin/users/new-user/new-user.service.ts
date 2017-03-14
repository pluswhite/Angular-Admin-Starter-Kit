import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class NewUserService {

  public userRequestUrl = "users";
  public subject: Subject<any> = new Subject<any>();

  constructor(
    private _tokenService: Angular2TokenService,
    public http: Http
  ) { }

  addUser(userData) {
    // console.log(userData);
    return this._tokenService.post(this.userRequestUrl, {
      userData
    });
  }
}
