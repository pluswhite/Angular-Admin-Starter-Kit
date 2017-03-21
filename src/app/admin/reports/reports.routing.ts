import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';

import { TotalReportComponent } from './total-report';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'list',
        component: TotalReportComponent
      }
    ]
  },
];

export const routing = RouterModule.forChild(routes);
