import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../_guard/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  public requestUrl: string = "http://localhost:3001/sessions/create";
  public form: FormGroup;
  public name:AbstractControl;
  // public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  error: any = "";
  message : string;

  constructor(
    private router: Router,
    private http: Http,
    private authService: AuthService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      // 'email': [
      //   '',
      //   Validators.compose([
      //     Validators.required,
      //     Validators.minLength(4)
      //   ])
      // ],
      'password': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ]
    });

    this.name = this.form.controls['name'];
    // this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() { }

  sendMsg() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
    console.log(this.message);
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.message = "Trying to log in ...";
      this.login(values);
    }
  }

  login (data) {
    this.authService.login(data);
    this.sendMsg();
  }

  logout () {
    this.authService.logout();
    this.sendMsg();
  }
}
