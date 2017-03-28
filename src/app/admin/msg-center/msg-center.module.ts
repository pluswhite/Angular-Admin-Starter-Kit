import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';

import {
  SharedModule as PrimeSharedModule,
  InputTextModule,
  PanelModule,
  DataTableModule,
  ButtonModule,
  MultiSelectModule,
  ToolbarModule,
  BlockUIModule,
} from 'primeng/primeng'

import { MsgCenterComponent } from './msg-center.component';
import { MsgCenterService } from './msg-center.service';
import { routing } from './msg-center.routing';

@NgModule({
  imports: [
    PrimeSharedModule,
    InputTextModule,
    PanelModule,
    DataTableModule,
    ButtonModule,
    MultiSelectModule,
    ToolbarModule,
    BlockUIModule,
    SharedModule,
    routing
  ],
  exports: [
  ],
  declarations: [
    MsgCenterComponent
  ],
  providers: [
    MsgCenterService
  ],
})
export class MsgCenterModule { }
