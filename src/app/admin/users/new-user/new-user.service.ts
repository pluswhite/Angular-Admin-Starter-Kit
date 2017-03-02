import { Injectable } from '@angular/core';

@Injectable()
export class NewUserService {

  constructor() { }

  addUser(userData) {
    console.log(userData);
  }
}
