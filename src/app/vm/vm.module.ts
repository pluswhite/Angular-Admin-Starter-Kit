import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ButtonModule,
  MenuModule,
} from 'primeng/primeng';

import { VmHeaderComponent } from './components/vmHeader';
import { VmSidebarComponent } from './components/vmSidebar';
import { VmContentTopComponent } from './components/vmContentTop';
import { VmBackTopComponent } from './components/vmBackTop';
import { VmMenuComponent } from './components/vmMenu';
import { VmMenuItemComponent } from './components/vmMenu/components/vmMenuItem';

import {
  VmMenuService
} from './services'

const VM_COMPONENTS = [
  VmHeaderComponent,
  VmSidebarComponent,
  VmContentTopComponent,
  VmBackTopComponent,
  VmMenuComponent,
  VmMenuItemComponent
];

const VM_SERVICES = [
  VmMenuService
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenuModule,
  ],
  exports: [
    ...VM_COMPONENTS
  ],
  declarations: [
    ...VM_COMPONENTS,
  ],
  providers: [],
})
export class VmModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: VmModule,
      providers: [
        ...VM_SERVICES
      ],
    }
  }
}
