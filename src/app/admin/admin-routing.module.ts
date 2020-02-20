import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/:mode/:id',
        component: PostEditComponent,
      }
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
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
