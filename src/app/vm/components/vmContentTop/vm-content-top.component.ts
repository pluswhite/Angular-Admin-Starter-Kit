import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

import 'style-loader!./vm-content-top.component.scss';

@Component({
  selector: 'vm-content-top',
  templateUrl: './vm-content-top.component.html',
  styleUrls: [
    // './vm-content-top.component.scss'
  ]
})
export class VmContentTopComponent implements OnInit {

  private breadcrumbItem: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.breadcrumbItem = [];
    this.breadcrumbItem.push({
      label: 'Home'
    });
    this.breadcrumbItem.push({
      label: 'List'
    });
  }
}
