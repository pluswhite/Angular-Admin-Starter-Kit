import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { ToastyService, ToastData } from 'ng2-toasty';

import { NewUserService } from './new-user.service';

@Component({
  selector: 'new-user',
  templateUrl: 'new-user.component.html'
})
export class NewUserComponent implements OnInit {
  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public level: AbstractControl;
  public profile: AbstractControl;
  public role: AbstractControl;
  public submitted: boolean = false;

  public formErrors = {
    "name": "",
    "email": "",
    "level": "",
    "profile": "",
    "role": "",
    "formError": ""
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'The user name 4 to 32 characters.'
    },
    'email': {
      'required': 'Email is required.',
      'pattern': 'Please enter the correct email address.'
    },
    'level': {
      'required': 'Level is\'t empty.',
    },
    'profile': {},
    "role": {}
  };

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    private _toastyService: ToastyService,
    private _newUserService: NewUserService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      "name": [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ])
      ],
      "email": [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ])
      ],
      'level': [
        '1',
        Validators.compose([
          Validators.required
        ]),
      ],
      'profile': [
        ''
      ],
      'role': [
        'editor'
      ]
    });

    this.email = this.form.controls['email'];
    this.name = this.form.controls['name'];
    this.level = this.form.controls['level'];
    this.profile = this.form.controls['profile'];
    this.role = this.form.controls['role'];

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
    // this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.form) {
      return;
    }
    const
      form = this.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form .get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }

  public onSubmit (values: Object): void {
    var
      that = this;
    this.submitted = true;
    if (this.form.valid) {
      // TDDO: Data send & handle.
      this._newUserService.addUser(values)
        .map(res => res.json())
        .subscribe(
          data => {
            console.log(data);
            this._toastyService.success({
              title: "Success!",
              msg: "New user has been added.",
              showClose: true,
              timeout: 5000,
              theme: 'default',
              onAdd: (toast:ToastData) => {
              },
              onRemove: function(toast:ToastData) {
                that.router.navigate(['../user-list'], {
                  relativeTo: that.route
              });
              }
            });
          },
          error => {
            this.formErrors.formError = error.message;
            console.log(error);
          }
        );
    } else {
      this.formErrors.formError = "Some Errors";
    }
  }
}
