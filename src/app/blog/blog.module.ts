import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { Category } from '../models/category.model';

@NgModule({
  declarations: [
    BlogComponent,
    PostDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
  ],
  exports: [
    BlogComponent,
    PostDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BlogModule {}
