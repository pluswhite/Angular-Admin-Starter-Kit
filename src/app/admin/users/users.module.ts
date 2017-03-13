import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../_shared/shared.module';

import { DataTableModule, SharedModule as PrimeSharedModule, PanelModule, MessagesModule, ToolbarModule, ButtonModule } from 'primeng/primeng';

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
    PrimeSharedModule,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    MessagesModule,
    DataTableModule
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
