import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent, Message } from 'primeng/primeng';

import { UserListService } from './user-list.service';
import { User } from './user';

import 'style-loader!./user-list.component.scss';

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: [
    // './user-list.component.scss'
  ]
})
export class UserListComponent implements OnInit {

  dataSource: User[];

  users: User[];

  totalRecords: number;

  msgs: Message[] = [];

  constructor(protected userListService: UserListService) {
  }

  ngOnInit() {
    this.getDataList();
  }

  getDataList () {
    this.userListService
      .getUserListData()
      .map(res => res.json())
      .subscribe(
        res => {
          this.dataSource = res.data;
          this.totalRecords = this.dataSource.length;
          this.users = this.dataSource.slice(0, 10);
        },
        error => {
          console.log(error);
          this.msgs.push({
            severity:'error',
            summary:'Error Message',
            detail:'Some error occurs.'
          });
        }
      )
  }


  loadUsersLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if(this.dataSource) {
        this.users = this.dataSource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  refresh () {
    this.msgs = [];
    this.getDataList();
  }
}
