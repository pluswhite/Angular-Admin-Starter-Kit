import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
