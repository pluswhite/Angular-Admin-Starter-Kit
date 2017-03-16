import {Component, Input, Output, EventEmitter} from '@angular/core';

import 'style-loader!./vm-menu-item.component.scss';

@Component({
  selector: 'vm-menu-item',
  templateUrl: './vm-menu-item.component.html'
})
export class VmMenuItemComponent {

  @Input() menuItem:any;
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
