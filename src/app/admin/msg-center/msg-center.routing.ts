import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsgCenterComponent } from './msg-center.component';

const routes: Routes = [
  {
    path: '',
    component: MsgCenterComponent
  },
  {
    path: ':id',
    component: MsgCenterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
