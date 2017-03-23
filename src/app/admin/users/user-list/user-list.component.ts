import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, Message, ConfirmationService, SelectItem } from 'primeng/primeng';

import { UsersService } from '../users.service';
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
  cols: any[];
  columnOptions: SelectItem[] = [];

  msgs: Message[] = [];
  popMsgs: Message[] = [];
  blockedPanel: boolean = false;

  constructor(
    private _titleService: Title,
    private confirmationService: ConfirmationService,
    protected usersService: UsersService) {
      _titleService.setTitle('User List');
  }

  ngOnInit() {
    this.cols = [
      {
        field: "id",
        header: "ID"
      },
       {
        field: "firstName",
        header: "First Name"
      },
      {
        field: "lastName",
        header: "Last Name"
      },
      {
        field: "userName",
        header: "UserName"
      },
      {
        field: "email",
        header: "E-mail"
      },
      {
        field: "age",
        header: "Age"
      }
    ];

    for(let i = 0, l = this.cols.length; i < l; i++) {
      this.columnOptions.push({
        label: this.cols[i].header,
        value: this.cols[i]
      });
    }
    this.getDataList();
  }

  getDataList() {
    this.blockedPanel = true;
    this.usersService
      .getUserListData()
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

  editItem(user: User) {
    console.log(user);
    this.popMsgs = [];
    this.popMsgs.push({
      severity: 'info',
      summary: 'Edit User',
      detail: 'The user you edit: ' + user.id,
    });
    console.log(this.popMsgs);
  }

  deleteItem(user: User) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        console.log(user);
        this.popMsgs = [];
        // this.usersService.doDeleteUser(user)
        //   .subscribe(
        //     res => {
        //       this.popMsgs.push({
        //         severity:'error',
        //         summary:'Confirmed',
        //         detail:'Record ' + user.id + ' deleted'
        //       });
        //     },
        //     error => {
        //       this.popMsgs.push({
        //         severity:'error',
        //         summary:'Failure!',
        //         detail:'Can\'t delete user: ' + user.id
        //       });
        //     }
        //   );
      }
    });
  }
}
