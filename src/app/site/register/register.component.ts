import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: [
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {
  public requestUrl: string = 'http://localhost:3001/users';
  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;

  constructor(
    private router: Router,
    private http: Http,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      'email': [
        '',
        Validators.compose([
          Validators.required,
          EmailValidator.validate
        ])
      ],
      'passwords': fb.group({
        'password': [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])
        ],
        'repeatPassword': [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(4)
          ])
        ]
      },
      {
        validator: EqualPasswordsValidator.validate('password', 'repeatPassword')
      })
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  ngOnInit() { }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
      this.register(values);
    }
  }

  register (data) {
    var
      username = data.name,
      email = data.email,
      password = data.passwords.password,
      creds = "username=" + username + "&email=" + email + "&password=" + password + "&extra=color";

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
        if (data["id_token"]) {
          // this.router.navigate(['/site/login']);
        }
      },
      err => console.log(err),
      () => console.log('Register Complete')
    );
  }

  logError () {

  }
}
