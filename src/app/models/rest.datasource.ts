import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

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

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}posts`);
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
