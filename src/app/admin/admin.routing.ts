import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full'
      // },
      {
        path: 'dashboard',
        loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'forms',
        loadChildren: 'app/admin/forms/forms.module#FormsModule'
      }
    ]
  },
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
