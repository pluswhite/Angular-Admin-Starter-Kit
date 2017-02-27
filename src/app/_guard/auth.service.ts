import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public requestUrl: string = "http://localhost:3001/sessions/create";
  public token: string;

  constructor(private http: Http) {
    // Set token if saved in local storage
    var
      currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.requestUrl, JSON.stringify({
      username: username,
      password: password
    }))
    .map((res: Response) => {
      let
        // Login successful if there's a jwt token in the response
        token = res.json() && res.json().token;
      if (token) {
        // Set token property
        this.token = token;

        localStorage.setItem("currentUser", JSON.stringify({
          username: username,
          token: token
        }));

        // Return true to indicate successful login
        return true;
      } else {
        // Return false to indicate failed login
        return false;
      }
    });
  }

  logout(): void {
    // Clear token remove user from local storage to log user logout
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
