import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { Message } from 'primeng/primeng';

import { SettingsService } from './settings.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: [
    './settings.component.scss'
  ]
})

export class SettingsComponent implements OnInit {

  public form: FormGroup;
  public currentPassword: AbstractControl;
  public newPassword: AbstractControl;
  public confirmPassword: AbstractControl;

  public formErrors = {
    'currentPassword': '',
    'newPassword': '',
    'confirmPassword': '',
    'formError': ''
  };
  public validationMessages = {
    'currentPassword': {
      'required': 'Password is required.',
      'minlength': 'Password at least 8 characters.'
    },
    'newPassword': {
      'required': 'New Password is required.',
      'minlength': 'New password at least 8 characters.'
    },
    'confirmPassword': {
      'required': 'Confirm Password is required.',
      'minlength': 'Confirm password at least 8 characters.',
      'validateEqual': "Confirm aassword doesn't match new password."
    }
  };

  msgs: Message[] = [];
  errorMsgs: Message[] = [];

  public profileInfo = {};

  constructor(
    private _titleService: Title,
    private fb: FormBuilder,
    private _settingsService: SettingsService
  ) {
    _titleService.setTitle('Settings');
  }

  ngOnInit() {
    this.buildForm();
    this._settingsService.getProfile()
    .map(res => res.json())
      .subscribe(
        (res) => {
          console.log(res.data);
          this.profileInfo = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  buildForm() {
    this.form = this.fb.group({
      'currentPassword': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
      'newPassword': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
      'confirmPassword': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ]
    });
    this.currentPassword = this.form.controls['currentPassword'];
    this.newPassword = this.form.controls['newPassword'];
    this.confirmPassword = this.form.controls['confirmPassword'];

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
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

  onSubmit(values: Object) {
    if (this.form.valid) {
      console.log(values);
      this._settingsService.changePassword(values)
        .subscribe(
          (res) => {
            console.log(res);
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Success!',
              detail: 'Password has been updated.'
            });
          },
          (error) => {
            console.log(error);
            this.errorMsgs = [];
            this.errorMsgs.push({
              severity: 'error',
              summary: 'Errors!',
              detail: error.message
            });
          }
        );
    } else {
      this.errorMsgs = [];
      this.errorMsgs.push({
        severity: 'error',
        summary: 'Form Error!',
        detail: "Some Errors in your form."
      });
    }
  }
}
