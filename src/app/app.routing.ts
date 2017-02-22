import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    redirectTo: 'pages',
  },
  {
    path: 'admin',
    redirectTo: 'admin'
  },
  {
    path: '**',
    redirectTo: '/admin/dashboard'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
