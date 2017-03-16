import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { VmMenuService } from '../vm';
import { ADMIN_MENU } from './admin.menu';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: [
    'admin.component.scss'
  ]
})

export class AdminComponent implements OnInit {
  constructor(
    private _menuService: VmMenuService
    ) {

    }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>ADMIN_MENU);
  }

  addToast() {
  }
}
