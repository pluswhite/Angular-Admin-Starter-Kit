import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  error: any = "";

  constructor(
    private _loginService: LoginService,
    public fb: FormBuilder) {
    this.form = fb.group({
      'email': [
        '',
        Validators.compose([
          Validators.required,
          EmailValidator.validate
        ])
      ],
      'password': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    this._loginService.checkLogin();
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this._loginService.doLogin(values);
    }
  }

  logout () {
    this._loginService.doLogout();
  }
}
