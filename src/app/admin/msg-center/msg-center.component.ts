import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


import {Message, SelectItem } from 'primeng/primeng';

import { MsgCenterService } from './msg-center.service';
import { Msg } from './msg';

@Component({
  selector: 'msg-center',
  templateUrl: './msg-center.component.html'
})

export class MsgCenterComponent implements OnInit {

  dataSource: Msg[];
  users: Msg[];
  cols: any[];
  columnOptions: SelectItem[] = [];

  msgs: Message[] = [];
  popMsgs: Message[] = [];
  blockedPanel: boolean = false;

  constructor(
    private _msgCenterService: MsgCenterService,
    private _titleService: Title
  ) {
    this._titleService.setTitle('Message Center');
  }

  ngOnInit() {
    this.cols = [
      {
        field: "id",
        header: "ID"
      },
       {
        field: "title",
        header: "Title"
      },
      {
        field: "status",
        header: "Status"
      },
      {
        field: "date",
        header: "Date"
      },
      {
        field: "msg",
        header: "Message"
      }
    ];

    this.cols.forEach((val, idx) => {
      this.columnOptions.push({
        label: this.cols[idx].header,
        value: val
      });
    });
    this.getDataList();
  }

  getDataList() {
    this.blockedPanel = true;
    this._msgCenterService
      .getMsgListData()
      .map(res => res.json())
      .subscribe(
        res => {
          this.dataSource = res.data;
          this.blockedPanel = false;
        },
        error => {
          console.log(error);
          this.msgs = [];
          this.msgs.push({
            severity:'error',
            summary:'Error Message',
            detail:'Get data failure. Please refresh.'
          });
        }
      )
  }

  refresh() {
    this.msgs = [];
    this.getDataList();
  }
}
