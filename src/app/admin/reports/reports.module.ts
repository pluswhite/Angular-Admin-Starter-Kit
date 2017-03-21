import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';
import { PrimeNGModule } from '../../_shared/primeng.module';

import { routing } from './reports.routing';
import { ReportsService } from './reports.service';
import { ReportsComponent } from './reports.component';
import { TotalReportComponent } from './total-report';

@NgModule({
  imports: [
    PrimeNGModule,
    SharedModule,
    routing
  ],
  exports: [],
  declarations: [
    ReportsComponent,
    TotalReportComponent
  ],
  providers: [
    ReportsService
  ],
})
export class ReportsModule { }
