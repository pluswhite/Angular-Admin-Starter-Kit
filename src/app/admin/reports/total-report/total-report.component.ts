import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, Message, SelectItem } from 'primeng/primeng';

import { ReportListItem } from './total-report';

import { ReportsService } from '../reports.service';

@Component({
  selector: 'total-report',
  templateUrl: './total-report.component.html',
  styleUrls: [
    './total-report.component.scss'
  ]
})
export class TotalReportComponent implements OnInit {
  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public level: AbstractControl;
  dataSource: ReportListItem[];
  cols: any[];
  columnOptions: SelectItem[] = [];
  levels: SelectItem[] = [];

  msgs: Message[] = [];
  popMsgs: Message[] = [];
  blockedPanel: boolean = false;

  constructor(
    private _titleService: Title,
    public formBuilder: FormBuilder,
    private reportsService: ReportsService
  ) {
    this._titleService.setTitle('Total Report');
    this.levels.push(
      {
        label: '1',
        value: '1'
      }, {
        label: '2',
        value: '2'
      }, {
        label: '3',
        value: '3'
      }, {
        label: '4',
        value: '4'
      }, {
        label: '5',
        value: '5'
      }
    );
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      "name": [
        '',
      ],
      "email": [
        '',
        Validators.compose([
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ])
      ],
      'level': [
        '1'
      ]
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.level = this.form.controls['level'];

    this.getDataList(this.form.value);
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
      },
      {
        field: "income",
        header: "Income"
      }
    ];

    for(let i = 0, l = this.cols.length; i < l; i++) {
      this.columnOptions.push({
        label: this.cols[i].header,
        value: this.cols[i]
      });
    }
  }

  getDataList(search?: any) {
    this.blockedPanel = true;
    this.reportsService
      .getTotalReportListData(search)
      .map(res => res.json())
      .subscribe(
        (res) => {
          this.blockedPanel = false;
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

  public onSubmit (values: Object): void {
    this.getDataList(values);
  }
}
