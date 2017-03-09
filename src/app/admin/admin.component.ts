import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { BaMenuService } from '../theme';
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
    private _menuService: BaMenuService,
    private _toastyService: ToastyService,
    private _toastyConfig: ToastyConfig
    ) {

    }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>ADMIN_MENU);
  }

  addToast() {
    this._toastyService.default('Hi welcome!');
    // Or create the instance of ToastOptions
    var toastOptions:ToastOptions = {
        title: "My title",
        msg: "The message",
        showClose: true,
        timeout: 10000,
        theme: 'default',
        onAdd: (toast:ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast:ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    // Add see all possible types in one shot
    this._toastyService.info(toastOptions);
    this._toastyService.success(toastOptions);
    this._toastyService.wait(toastOptions);
    this._toastyService.error(toastOptions);
    this._toastyService.warning(toastOptions);
  }
}
