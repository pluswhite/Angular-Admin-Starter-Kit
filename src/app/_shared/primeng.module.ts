import { NgModule } from '@angular/core';

import {
  InputTextModule,
  DataTableModule,
  SharedModule as PrimeSharedModule,
  PanelModule,
  MessagesModule,
  ToolbarModule,
  ButtonModule,
  InputSwitchModule,
  ConfirmDialogModule,
  ConfirmationService,
  GrowlModule,
  BlockUIModule,
  InputTextareaModule,
  DropdownModule,
  RadioButtonModule
} from 'primeng/primeng';

@NgModule({
	exports: [
		PrimeSharedModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    MessagesModule,
    DataTableModule,
    InputSwitchModule,
    ConfirmDialogModule,
    GrowlModule,
    BlockUIModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule
	],
  providers: [
    ConfirmationService
  ],
})

export class PrimeNGModule {}
