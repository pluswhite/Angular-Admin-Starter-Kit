import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit {
  private currentId;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.currentId = +this.route.snapshot.params['id'];
  }
}
