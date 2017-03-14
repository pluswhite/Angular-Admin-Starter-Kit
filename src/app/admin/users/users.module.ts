import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../_shared/shared.module';

import {
  DataTableModule,
  SharedModule as PrimeSharedModule,
  PanelModule,
  MessagesModule,
  ToolbarModule,
  ButtonModule,
  InputSwitchModule,
  ConfirmDialogModule,
  ConfirmationService,
  GrowlModule
} from 'primeng/primeng';

import { routing } from './users.routing';
import { UsersComponent } from './users.component';

import { UserListComponent } from './user-list';
import { UserListService } from './user-list/user-list.service';

import { NewUserComponent } from './new-user';
import { NewUserService } from './new-user/new-user.service';

import { EditUserComponent } from './edit-user';
import { EditUserService } from './edit-user/edit-user.service';

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
    DataTableModule,
    InputSwitchModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  exports: [],
  declarations: [
    UsersComponent,
    UserListComponent,
    NewUserComponent,
    EditUserComponent
  ],
  providers: [
    ConfirmationService,
    UserListService,
    NewUserService,
    EditUserService
  ],
})
export class UsersModule { }
