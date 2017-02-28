import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list';
import { NewUserComponent } from './new-user';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'new-user',
        component: NewUserComponent
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
