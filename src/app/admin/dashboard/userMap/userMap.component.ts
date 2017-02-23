import { Component, OnInit } from '@angular/core';
import { UserMapService } from './userMap.service';
import 'style-loader!./userMap.component.scss';

@Component({
  selector: 'users-map',
  templateUrl: './userMap.component.html',
  styleUrls: [
    './userMap.component.scss'
  ]
})
export class UserMapComponent implements OnInit {
  mapData: Object;

  constructor(private userMapService: UserMapService) {
    this.mapData = this.userMapService.getData();
  }

  ngOnInit() { }
}
