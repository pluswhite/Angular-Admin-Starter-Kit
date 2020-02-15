import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostComponent, PostDetailComponent],
  exports: [PostComponent, PostDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PostModule {}
