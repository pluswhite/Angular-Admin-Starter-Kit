import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NewUserService {

  public userRequestUrl = "mock-data/new-user-mock.json";
  public subject: Subject<any> = new Subject<any>();

  constructor(
    public http: Http
  ) { }

  addUser(userData) {
    // console.log(userData);
    return this.http.get(this.userRequestUrl)
            .map((res: Response) => {
              let user = res.json();
              this.subject.next(user);
            })
  }
}
