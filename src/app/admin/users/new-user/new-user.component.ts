import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-user',
  templateUrl: 'new-user.component.html'
})
export class NewUserComponent implements OnInit {
  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public submitted: boolean = false;
  public checkboxModel = [{
    name: 'Checkbox with success',
    state: false,
    class: 'has-success checkbox'
  }, {
    name: 'Checkbox with warning',
    state: false,
    class: 'has-warning checkbox',
  }, {
    name: 'Checkbox with error',
    state: false,
    class: 'has-error checkbox'
  }];

  public checkboxPropertiesMapping = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  public formErrors = {
    "name": "",
    "email": ""
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'The user name 4 to 32 characters.'
    },
    'email': {
      'required': 'Email is required.',
      'pattern': 'Please enter the correct email address.'
    }
  };

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      'name': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ])
      ],
      'email': [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ])
      ]
    });

    this.email = this.form.controls['email'];
    this.name = this.form.controls['name'];

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
    this.submitted = true;
    if (this.form.valid) {
      console.log(values);
    }
  }
}
