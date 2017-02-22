import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import { PieChartComponent } from './pieChart';
import { PieChartService } from './pieChart/pieChart.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    PieChartComponent
  ],
  providers: [
    PieChartService
  ],
})
export class DashboardModule { }
