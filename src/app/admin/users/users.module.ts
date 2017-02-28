import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './users.routing';
import { UsersComponent } from './users.component';

import { UserListComponent } from './user-list';
import { UserListService } from './user-list/user-list.service';

import { NewUserComponent } from './new-user';

@NgModule({
  imports: [
    SharedModule,
    routing,
    Ng2SmartTableModule
  ],
  exports: [],
  declarations: [
    UsersComponent,
    UserListComponent,
    NewUserComponent
  ],
  providers: [
    UserListService
  ],
})
export class UsersModule { }
