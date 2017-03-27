import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  InputTextModule,
  ButtonModule,
  MessagesModule
} from 'primeng/primeng';

import { routing } from './site.routing';
import { NgaModule } from '../theme/nga.module';

import { SiteComponent } from './site.component';

import { LoginComponent } from './login';
import { LoginService } from './login/login.service';

import { RegisterComponent } from './register';
import { RegisterService } from './register/register.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    routing,
  ],
  exports: [],
  declarations: [
    SiteComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    LoginService,
    RegisterService
  ],
})
export class SiteModule { }
