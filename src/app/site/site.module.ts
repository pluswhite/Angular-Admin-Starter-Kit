import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './site.routing';
import { NgaModule } from '../theme/nga.module';

import { SiteComponent } from './site.component';

import { LoginComponent } from './login';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  exports: [],
  declarations: [
    SiteComponent,
    LoginComponent
  ],
  providers: [
    LoginService
  ],
})
export class SiteModule { }
