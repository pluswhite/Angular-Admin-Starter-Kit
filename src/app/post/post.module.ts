import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostComponent, PostDetailComponent],
  exports: [PostComponent, PostDetailComponent],
  imports: [CommonModule, FormsModule, PostRoutingModule],
})
export class PostModule {}
