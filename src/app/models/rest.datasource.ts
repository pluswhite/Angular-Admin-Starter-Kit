import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  authToken: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.authToken}>`,
      }),
    };
  }

  authenticate(email: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(`${this.baseUrl}/users`, {
        email,
        password,
      })
      .pipe(
        map(response => {
          this.authToken = response.success ? response.token : null;
          return response.success;
        }),
      );
  }
}
