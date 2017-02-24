import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from './site.component';
import { LoginComponent } from './login';

const routes: Routes = [
  {
    path: 'site',
    component: SiteComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
