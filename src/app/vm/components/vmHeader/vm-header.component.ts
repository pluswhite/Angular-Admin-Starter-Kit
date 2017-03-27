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

  public noticeCenter = [];
  public msgCenter = [];

  @ViewChild('headerMenu') public _headerMenu:ElementRef;
  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router
  ) { }

  ngOnInit() {
    this.noticeCenter = [
      {
        "icon": "fa-bug",
        "msg": "Pending tasks"
      },
      {
        "icon": "fa-calendar",
        "msg": "Meeting today at 3pm"
      },
      {
        "icon": "fa-download",
        "msg": "Download documents"
      },
      {
        "icon": "fa-plane",
        "msg": "Book flight"
      }
    ];
    this.msgCenter = [
      {
        "status": false,
        "msg": "Give me a call",
        "url": "#",
      },
      {
        "status": true,
        "msg": "Sales reports attached",
        "url": "#",
      },
      {
        "status": false,
        "msg": "About your invoice",
        "url": "#",
      },
      {
        "status": true,
        "msg": "Meeting today at 10pm",
        "url": "#",
      },
      {
        "status": false,
        "msg": "Out of office",
        "url": "#",
      }
    ];
  }

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
      $headerMenuItem = jQuery(this._headerMenu.nativeElement).find('li.menu-item');
    $headerMenuItem.on('click', function(evt){
      evt.stopPropagation();
      $headerMenuItem.removeClass('open');
      $(this).addClass('open');
    });
    jQuery(document).click(function() {
      $headerMenuItem.removeClass('open');
    });
  }
}
