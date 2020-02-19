import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestDataSource } from '../models/rest.datasource';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource) {}

  authenticate(email: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(email, password);
  }

  get authenticated(): boolean {
    return this.datasource.authToken != null;
  }

  clear() {
    this.datasource.authToken = null;
  }
}
