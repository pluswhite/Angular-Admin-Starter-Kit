import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {Message, SelectItem } from 'primeng/primeng';

import { MsgCenterService } from './msg-center.service';
import { Msg } from './msg';

@Component({
  selector: 'msg-center',
  templateUrl: './msg-center.component.html'
})

export class MsgCenterComponent implements OnInit {

  public dataSource: Msg[];
  private users: Msg[];
  private cols: any[];
  private columnOptions: SelectItem[] = [];

  private msgs: Message[] = [];
  private popMsgs: Message[] = [];
  private blockedPanel: boolean = false;
  private currentId;

  constructor(
    private _msgCenterService: MsgCenterService,
    private _titleService: Title,
    private route: ActivatedRoute
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
      }
    ];

    this.cols.forEach((val, idx) => {
      this.columnOptions.push({
        label: this.cols[idx].header,
        value: val
      });
    });
    this.currentId = +this.route.snapshot.params['id'];
    this.getDataList(this.currentId);
  }

  getDataList(id) {
    this.blockedPanel = true;
    this._msgCenterService
      .getMsgListData(id)
      .map(res => res.json())
      .subscribe(
        res => {
          console.log(res.data);
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
