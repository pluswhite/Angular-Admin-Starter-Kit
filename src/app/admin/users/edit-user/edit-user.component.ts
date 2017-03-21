import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Message, SelectItem } from 'primeng/primeng';

import { UsersService } from '../users.service';

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit {
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
  levels: SelectItem[] = [];
  msgs: Message[] = [];
  errorMsgs: Message[] = [];
  blockedPanel: boolean = false;
  private currentId;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    private usersService: UsersService) {

    this.levels.push({
      label: '1',
      value: '1'
    }, {
      label: '2',
      value: '2'
    }, {
      label: '3',
      value: '3'
    }, {
      label: '4',
      value: '4'
    }, {
      label: '5',
      value: '5'
    });
  }

  ngOnInit() {
    this.blockedPanel = true;
    this.currentId = +this.route.snapshot.params['id'];
    // TODO: Get user info by current id.
    this.buildForm();
    this.route.params
      .switchMap((params: Params) => this.usersService.getUser(params['id']))
      .subscribe(
        (data) => {
          console.log(data);
          this.form.patchValue({
            name: data.name,
            email: data.email,
            level: data.level,
            profile: data.profile,
            role: data.role
          });
          this.blockedPanel = false;
        },
        (error) => {
          console.log(error);
          this.errorMsgs = [];
          this.errorMsgs.push({
            severity: 'error',
            summary: 'Error!',
            detail: "Some errors from get user info."
          });
        }
      )
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

  public onSubmit (values: Object): void {
    var
      that = this;
    this.submitted = true;
    if (this.form.valid) {
      this.usersService.addUser(values)
        .map(res => res.json())
        .subscribe(
          data => {
            console.log(data);
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Success!',
              detail: 'New user has been added.'
            });
            setTimeout(function() {
              that.router.navigate(['../user-list'], {
                relativeTo: that.route
              });
            }, 1000);
          },
          error => {
            this.errorMsgs = [];
            this.errorMsgs.push({
              severity: 'error',
              summary: 'Form Error!',
              detail: error.message
            });
            console.log(error);
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
