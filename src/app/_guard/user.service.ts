import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable()
export class UserService {
    public requestUrl: string = 'http://localhost:3001/users';
    constructor(
        private http: Http,
        private authService: AuthService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({
          'Authorization': 'Bearer ' + this.authService.token
        });
        let options = new RequestOptions({
          headers: headers
        });

        // get users from api
        return this.http.get(this.requestUrl, options)
            .map((response: Response) => response.json());
    }
}
