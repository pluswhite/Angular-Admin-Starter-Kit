import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent, Message, ConfirmationService } from 'primeng/primeng';

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

  checked: boolean = true;

  msgs: Message[] = [];
  popMsgs: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    protected userListService: UserListService) {
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
          this.users = this.dataSource.slice(0, 30);
        },
        error => {
          console.log(error);
          this.msgs.push({
            severity:'error',
            summary:'Error Message',
            detail:'Get data failure. Please refresh.'
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

  refresh() {
    this.msgs = [];
    this.getDataList();
  }

  editUser(user: User) {
    console.log(user);
    this.popMsgs = [];
    this.popMsgs.push({
      severity: 'info',
      summary: 'Edit User',
      detail: 'The user you edit: ' + user.id,
    });
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        console.log(user);
        this.popMsgs = [];
        this.popMsgs.push({
          severity:'error',
          summary:'Confirmed',
          detail:'Record ' + user.id + ' deleted'
        });
      }
    });
  }
}
