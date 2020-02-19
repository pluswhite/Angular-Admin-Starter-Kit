import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AdminComponent, AuthComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
  exports: [],
})
export class AdminModule {}
