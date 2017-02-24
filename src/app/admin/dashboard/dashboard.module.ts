import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

import { TodoComponent } from './todo';
import { TodoService } from './todo/todo.service';

import { CalendarComponent } from './calendar';
import { CalendarService } from './calendar/calendar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    PieChartComponent,
    LineChartComponent,
    TrafficChartComponent,
    UserMapComponent,
    TodoComponent,
    CalendarComponent
  ],
  providers: [
    PieChartService,
    LineChartService,
    TrafficChartService,
    UserMapService,
    TodoService,
    CalendarService
  ],
})
export class DashboardModule { }
