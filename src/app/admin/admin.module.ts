import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  exports: [],
  declarations: [
    AdminComponent
  ],
  providers: [],
})

export class AdminModule { }
