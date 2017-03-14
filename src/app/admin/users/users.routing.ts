import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list';
import { NewUserComponent } from './new-user';
import { EditUserComponent } from './edit-user';

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
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
