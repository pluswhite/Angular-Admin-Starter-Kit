import { Component, OnInit } from '@angular/core';

import {
  MenuItem
} from 'primeng/primeng';

@Component({
  selector: 'vm-sidebar',
  templateUrl: 'vm-sidebar.component.html',
  styleUrls: [
    './vm-sidebar.component.scss'
  ]
})
export class VmSidebarComponent implements OnInit {
  private sidebarItem: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.sidebarItem = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Dashboard',
            icon: 'fa-dashboard',
            routerLink: [
              './admin/dashboard'
            ]
          }
        ]
      },
      {
        label: 'Users',
        items: [
          {
            label: 'Users',
            icon: 'fa-user',
            routerLink: [
              './admin/users/user-list'
            ]
          }
        ]
      },
      {
        label: 'Pages',
        items: [
          {
            label: 'Login',
            icon: 'fa-file-o',
            routerLink: [
              './site/login'
            ]
          },
          {
            label: 'Register',
            icon: 'fa-file-o',
            routerLink: [
              './site/register'
            ]
          }
        ]
      }
    ];
  }
}
