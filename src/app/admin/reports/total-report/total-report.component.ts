import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, Message } from 'primeng/primeng';

import { ReportListItem } from './total-report';

import { ReportsService } from '../reports.service';

@Component({
  selector: 'total-report',
  templateUrl: 'total-report.component.html'
})
export class TotalReportComponent implements OnInit {

  dataSource: ReportListItem[];
  reportListItem: ReportListItem[];
  totalRecords: number;
  checked: boolean = true;

  msgs: Message[] = [];
  popMsgs: Message[] = [];
  blockedPanel: boolean = false;

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    this.reportsService
      .getTotalReportListData()
      .map(res => res.json())
      .subscribe(
        (res) => {
          this.dataSource = res.data;
          this.totalRecords = this.dataSource.length;
          this.reportListItem = this.dataSource.slice(0, 15);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  loadListLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if(this.dataSource) {
        this.reportListItem = this.dataSource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }
}
