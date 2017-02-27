import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './_guard';

import { NoContentComponent } from './no-content';

export const routes: Routes = [
  {
    path: 'pages',
    redirectTo: 'pages',
  },
  {
    path: 'site',
    redirectTo: 'site',
  },
  {
    path: 'admin',
    redirectTo: 'admin',
    canActivate: [AuthGuard]
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
