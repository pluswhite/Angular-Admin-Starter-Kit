import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [BlogComponent, PostDetailComponent],
  exports: [BlogComponent, PostDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BlogModule {}
