import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, Message, SelectItem } from 'primeng/primeng';

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
  cols: any[];
  columnOptions: SelectItem[] = [];

  msgs: Message[] = [];
  popMsgs: Message[] = [];
  blockedPanel: boolean = false;

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
    this.getDataList();
    this.cols = [
      {
        field: "id",
        header: "ID"
      },
       {
        field: "date",
        header: "Date"
      },
      {
        field: "traffic",
        header: "Traffic"
      },
      {
        field: "show",
        header: "Show"
      },
      {
        field: "click",
        header: "Click"
      }
    ];

    for(let i = 0, l = this.cols.length; i < l; i++) {
      this.columnOptions.push({
        label: this.cols[i].header,
        value: this.cols[i]
      });
    }
  }

  getDataList() {
    this.blockedPanel = true;
    this.reportsService
      .getTotalReportListData()
      .map(res => res.json())
      .subscribe(
        (res) => {
          this.blockedPanel = false;
          // this.dataSource = res.data;
          // this.totalRecords = this.dataSource.length;
          // this.reportListItem = this.dataSource.slice(0, 15);
          this.dataSource = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  refresh() {
    this.getDataList();
  }

  deleteItem(item) {
    console.log(item);
  }
}
