import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../_shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './users.routing';
import { UsersComponent } from './users.component';

import { UserListComponent } from './user-list';
import { UserListService } from './user-list/user-list.service';

import { NewUserComponent } from './new-user';
import { NewUserService } from './new-user/new-user.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
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
    UserListService,
    NewUserService
  ],
})
export class UsersModule { }
