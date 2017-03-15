import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  ButtonModule,
  MenuModule,
} from 'primeng/primeng';

import { VmHeaderComponent } from './components/vmHeader/vm-header.component';
import { VmSidebarComponent } from './components/vmSidebar/vm-sidebar.component';

const VM_COMPONENTS = [
  VmHeaderComponent,
  VmSidebarComponent
];


@NgModule({
  imports: [
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
      ngModule: VmModule
    }
  }
}
