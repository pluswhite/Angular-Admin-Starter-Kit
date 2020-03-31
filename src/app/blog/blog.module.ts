import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostsComponent,
    PostDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
  ],
  exports: [
    BlogComponent,
    PostsComponent,
    PostDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BlogModule {}
