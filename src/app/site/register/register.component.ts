import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { RegisterService } from './register.service';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: [
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;

  public formErrors = {
    "email": "",
    "password": "",
    "repeatPassword": "",
    "formError": ""
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'pattern': 'Please enter the correct email address.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'The password at least 8 characters.'
    },
    'repeatPassword': {
      'required': 'Repeat password is required.',
      'minlength': 'The repeat password at least 8 characters.'
    },
  };

  public msgs = [];

  constructor(
    private _registerService : RegisterService,
    private _titleService: Title,
    private router: Router,
    fb: FormBuilder
  ) {
    this._titleService.setTitle('Register');
    this.form = fb.group({
      'email': [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ])
      ],
      'password': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
      'repeatPassword': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.repeatPassword = this.form.controls['repeatPassword'];

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  ngOnInit() { }

  onValueChanged(data?: any) {
    this.msgs = [];
    if (!this.form) {
      return;
    }
    const
      form = this.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }

  public onSubmit(values:Object):void {
    let
      that = this;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
      // this.register(values);
      this._registerService.doRegister(values)
        .map(res => res.json())
        .subscribe(
          (res) => {
            console.log(res);
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Success!',
              detail: 'Login successfully.'
            });
            setTimeout(function() {
              that.router.navigate(['/site/login']);
            }, 1000);
          },
          (error) => {
            let
              errMsgs: string[];
            this.msgs = [];
            if (error.json().errors != null) {
              if (error.json().errors.full_messages != null) {
                errMsgs = error.json().errors.full_messages;
              } else {
                errMsgs = error.json().errors;
              }
            }
            errMsgs.forEach((err, idx) => {
              this.msgs.push({
                severity: 'error',
                summary: 'Error ' + idx + ': ',
                detail: err
              });
            });
          }
        );
    }
  }

  logError () {

  }
}
