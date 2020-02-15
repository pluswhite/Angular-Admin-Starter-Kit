import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/posts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
