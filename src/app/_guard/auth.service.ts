import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public requestUrl: string = "http://localhost:3001/sessions/create";
  public token: string;
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(
    private router: Router,
    private http: Http) {
    // Set token if saved in local storage
    var
      currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.token = currentUser && currentUser.token;
  }

  login(data) {
    var
      username = data.name,
      // email = data.email,
      password = data.password,
      creds = "username=" + username + "&password=" + password + "&extra=color";

    var
      headers = new Headers;

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(this.requestUrl, creds, {
      headers: headers
    })
    .map(res => res.json())
    .subscribe(
      data => {
        console.log(data);
        let
          // Login successful if there's a jwt token in the response
          token = data && data["id_token"];
        if (token) {
          // Set token property
          this.token = token;

          // localStorage.setItem("currentUser", data["id_token"]);
          localStorage.setItem('currentUser', token);
          // Set logged is true
          this.isLoggedIn = true;

          // Return true to indicate successful login
          this.router.navigate(['/admin']);
        } else {
          // Return false to indicate failed login
          return false;
        }
      },
      err => console.log(err),
      () => console.log('Login Success!')
    );
  }

  logout(): void {
    // Clear token remove user from local storage to log user logout
    this.token = null;
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }
}
