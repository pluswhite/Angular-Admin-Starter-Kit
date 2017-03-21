import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../_shared/shared.module';
import { PrimeNGModule } from '../../_shared/primeng.module';

import { routing } from './users.routing';
import { UsersComponent } from './users.component';

import { UsersService } from './users.service';

import { UserListComponent } from './user-list';

import { NewUserComponent } from './new-user';

import { EditUserComponent } from './edit-user';

@NgModule({
  imports: [
    SharedModule,
    PrimeNGModule,
    ReactiveFormsModule,
    routing
  ],
  exports: [],
  declarations: [
    UsersComponent,
    UserListComponent,
    NewUserComponent,
    EditUserComponent
  ],
  providers: [
    UsersService
  ],
})
export class UsersModule { }
