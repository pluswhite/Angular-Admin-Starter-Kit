import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'vm-header',
  templateUrl: './vm-header.component.html',
  styleUrls: [
    './vm-header.component.scss'
  ]
})
export class VmHeaderComponent implements OnInit {
  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router
  ) { }

  ngOnInit() { }

  logout() {
    return this._tokenService
      .signOut()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/site/login']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/site/login']);
        }
      );
  }
}
