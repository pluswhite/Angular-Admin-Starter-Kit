import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import { PieChartComponent } from './pieChart';
import { PieChartService } from './pieChart/pieChart.service';

import { LineChartComponent } from './lineChart';
import { LineChartService } from './lineChart/lineChart.service';

import { TrafficChartComponent } from './trafficChart';
import { TrafficChartService } from './trafficChart/trafficChart.service';

import { UserMapComponent } from './userMap';
import { UserMapService } from './userMap/userMap.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    PieChartComponent,
    LineChartComponent,
    TrafficChartComponent,
    UserMapComponent
  ],
  providers: [
    PieChartService,
    LineChartService,
    TrafficChartService,
    UserMapService
  ],
})
export class DashboardModule { }
