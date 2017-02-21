import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './admin.routing';
import { NgaModule } from '../theme/nga.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  exports: [],
  declarations: [
    AdminComponent
  ],
  providers: [],
})

export class AdminModule { }
