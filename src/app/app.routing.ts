import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NoContentComponent } from './no-content';

export const routes: Routes = [
  {
    path: 'site',
    redirectTo: 'site',
  },
  {
    path: 'admin',
    redirectTo: 'admin'
  },
  {
    path: '',
    redirectTo: '/site/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoContentComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
