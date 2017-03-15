import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  ButtonModule,
  MenuModule,
} from 'primeng/primeng';

import { VmHeaderComponent } from './components/vmHeader';
import { VmSidebarComponent } from './components/vmSidebar';
import { VmContentTopComponent } from './components/vmContentTop';
import { VmBackTopComponent } from './components/vmBackTop';

const VM_COMPONENTS = [
  VmHeaderComponent,
  VmSidebarComponent,
  VmContentTopComponent,
  VmBackTopComponent
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
