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

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // Send form code
      console.log(values);
      this.login(values);
    }
  }

  login (data) {
    var
      username = data.name,
      // email = data.email,
      password = data.password,
      creds = "username=" + username + "&password=" + password + "&extra=color";

    // var
    //   headers = new Headers;

    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.http.post(this.requestUrl, creds, {
    //   headers: headers
    // })
    // .map(res => res.json())
    // .subscribe(
    //   data => {
    //     localStorage.setItem('id_token', data["id_token"]);
    //     console.log(data);
    //   },
    //   err => console.log(err),
    //   () => console.log('Login Success!')
    // );
    this.authService.login(data);
  }
}
