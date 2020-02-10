import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Post } from './post.model';

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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`,
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.baseUrl}posts`)
      .pipe(catchError(this.handleError));
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      `${this.baseUrl}posts`,
      post,
      this.getOptions(),
    );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(
      `${this.baseUrl}posts/${post.id}`,
      post,
      this.getOptions(),
    );
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(
      `${this.baseUrl}posts/${id}`,
      this.getOptions(),
    );
  }

  authenticate(email: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(`${this.baseUrl}users`, {
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
