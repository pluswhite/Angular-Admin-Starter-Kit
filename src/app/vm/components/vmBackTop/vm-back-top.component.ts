import { Component, ViewChild, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vm-back-top',
  templateUrl: 'vm-back-top.component.html',
  styleUrls: [
    './vm-back-top.component.scss'
  ]
})
export class VmBackTopComponent implements OnInit {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @ViewChild('vmBackTop') _selector: ElementRef;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {}

  @HostListener('click')
  _onClick():boolean {
    jQuery('html body').animate({
      scrollTop: 0
    }, {
      duration: this.moveSpeed
    });

    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let
      el = this._selector.nativeElement;

      window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}
