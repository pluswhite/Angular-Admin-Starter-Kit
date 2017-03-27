import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('headerMenu') public _headerMenu:ElementRef;
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

  validateToken() {
    this._tokenService
      .validateToken()
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
          this.router.navigate(['/site/login']);
        }
      );
  }

  ngAfterViewInit() {
    let
      $headerMenuItem = jQuery(this._headerMenu.nativeElement).find('li > a');
    $headerMenuItem.on('focus', function(evt){
      $(this).parent().addClass('active');
    });
    $headerMenuItem.on('blur', function () {
      $(this).parent().removeClass('active');
    });
  }
}
