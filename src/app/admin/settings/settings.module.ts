import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../_shared/shared.module';

import {
  InputTextModule,
  PanelModule,
  ButtonModule,
  MessagesModule,
  GrowlModule,
} from 'primeng/primeng';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    MessagesModule,
    GrowlModule,
    routing
  ],
  exports: [],
  declarations: [
    SettingsComponent
  ],
  providers: [
    SettingsService
  ],
})
export class SettingsModule { }
