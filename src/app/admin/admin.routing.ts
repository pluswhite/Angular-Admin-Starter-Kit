import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { AuthGuard } from '../_guard';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      Angular2TokenService
    ],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'users',
        loadChildren: 'app/admin/users/users.module#UsersModule'
      },
      {
        path: 'forms',
        loadChildren: 'app/admin/forms/forms.module#FormsModule'
      }
    ]
  },
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);