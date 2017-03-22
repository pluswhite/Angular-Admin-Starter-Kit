import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuItem } from 'primeng/primeng';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

import 'style-loader!./vm-content-top.component.scss';

@Component({
  selector: 'vm-content-top',
  templateUrl: './vm-content-top.component.html',
  styleUrls: [
    // './vm-content-top.component.scss'
  ]
})
export class VmContentTopComponent implements OnInit {

  private breadcrumbItem: MenuItem[] = [];

  public _urls: string[] = [];
  public _routerSubscription: any;

  constructor(
    private router: Router,
    private _breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this._routerSubscription = this.router.events.subscribe(
      (navigationEnd: NavigationEnd) => {
        this._urls.length = 0;
        this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
      }
    );
  }

  ngOnChanges(changes: any): void {
    if (!this._urls) {
      return;
    }
    this._urls.length = 0;
    this.generateBreadcrumbTrail(this.router.url);
  }

  generateBreadcrumbTrail(url: string): void {
    this._urls.unshift(url);
    if (url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/')));
    }
    // console.log(this._urls);
    this.breadcrumbItem = [];
    for(let url of this._urls) {
      this.breadcrumbItem.push({
        label: this.friendlyName(url),
        command: (event) => {
          this.navigateTo(url);
        }
      });
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  friendlyName(url: string): string {
    return !url ? '' : this._breadcrumbService.getFriendlyNameForRoute(url);
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }
}
