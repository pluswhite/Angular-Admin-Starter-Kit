import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { InputsComponent } from './inputs/inputs.component';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: InputsComponent
      },
      {
        path: 'layouts',
        component: LayoutsComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
