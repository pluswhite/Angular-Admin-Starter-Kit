import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class EditUserService {

  public userRequestUrl = "/mock-data/user-info-mock.json";
  public subject: Subject<any> = new Subject<any>();

  constructor(
    private _tokenService: Angular2TokenService,
    public http: Http
  ) { }

  getUser(id) {
    // let
    //   getUserReqUrl = this.userRequestUrl + "/" + id;
    // console.log(userData);
    // return this._tokenService.get(getUserReqUrl);
    return this.http.get(this.userRequestUrl)
      .map(res => res.json());
  }
}
