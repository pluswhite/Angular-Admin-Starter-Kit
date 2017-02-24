import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { NgaModule } from '../theme/nga.module';

import { NoContentComponent } from './no-content.component';

@NgModule({
  imports: [
    // CommonModule,
    NgaModule
  ],
  exports: [],
  declarations: [
    NoContentComponent
  ],
  providers: [],
})
export class NoContentModule { }
