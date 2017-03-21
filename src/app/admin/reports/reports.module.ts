import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';

import { routing } from './reports.routing';
import { ReportsComponent } from './reports.component';
import { TotalReportComponent } from './total-report';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  exports: [],
  declarations: [
    ReportsComponent,
    TotalReportComponent
  ],
  providers: [],
})
export class ReportsModule { }
