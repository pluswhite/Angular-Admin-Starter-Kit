import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './admin.routing';
import { NgaModule } from '../theme/nga.module';
import { VmModule } from '../vm/vm.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    VmModule,
    NgaModule,
    routing
  ],
  exports: [
  ],
  declarations: [
    AdminComponent
  ],
  providers: [],
})

export class AdminModule { }
