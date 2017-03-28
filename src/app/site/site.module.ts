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
import { SiteService } from './site.service';

import { LoginComponent } from './login';

import { RegisterComponent } from './register';

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
    SiteService
  ],
})
export class SiteModule { }
