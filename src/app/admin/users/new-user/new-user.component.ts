import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-user',
  templateUrl: 'new-user.component.html'
})
export class NewUserComponent implements OnInit {
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
  constructor() { }

  ngOnInit() { }
}
