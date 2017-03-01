import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';

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
    SharedModule,
    routing
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
