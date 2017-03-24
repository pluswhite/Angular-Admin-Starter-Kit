import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';

import {
  ChartModule,
  PanelModule
} from 'primeng/primeng';

import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

@NgModule({
  imports: [
    SharedModule,
    routing,
    ChartModule,
    PanelModule
  ],
  exports: [],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ],
})
export class DashboardModule { }
