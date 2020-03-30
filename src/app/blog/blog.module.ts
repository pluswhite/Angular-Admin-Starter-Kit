import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    PostDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
  ],
  exports: [
    BlogComponent,
    BlogListComponent,
    PostDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BlogModule {}
