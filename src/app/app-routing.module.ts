import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { CategoriesComponent } from './blog/categories/categories.component';
import { CategoryDetailComponent } from './blog/category-detail/category-detail.component';
import { PostsComponent } from './blog/posts/posts.component';

const routes: Routes = [
  {
    path: 's',
    component: BlogComponent,
    children: [
      {
        path: 'posts/:id',
        component: PostDetailComponent,
      },
      {
        path: 'categories/:id',
        component: CategoryDetailComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: '**',
        component: PostsComponent,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: '**',
    redirectTo: '/s',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
