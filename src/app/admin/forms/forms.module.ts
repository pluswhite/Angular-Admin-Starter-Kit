import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFomrsModule } from '@angular/forms';

import { FormsComponent } from './forms.component';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './forms.routing';

import { InputsComponent } from './inputs';

import { LayoutsComponent } from './layouts';

@NgModule({
  imports: [
    CommonModule,
    AngularFomrsModule,
    NgaModule,
    routing,
  ],
  exports: [],
  declarations: [
    FormsComponent,
    InputsComponent,
    LayoutsComponent
  ],
  providers: [],
})
export class FormsModule { }
