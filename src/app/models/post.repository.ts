import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class PostRepository {
  posts: Post[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {}

  getPosts(): Observable<Post[]> {
    return this.dataSource.getPosts();
  }

  getPost(id: string): Observable<Post> {
    // return this.posts.find(p => p._id === id);
    return this.dataSource.getPostById(id);
  }

  savePost(post: Post) {
    // new post
    if (post._id == null || post._id === '') {
      this.dataSource.savePost(post).subscribe(p => this.posts.push(p));
    } else {
      // edit existing post
      this.dataSource.updatePost(post).subscribe(p => {
        this.posts.splice(
          this.posts.findIndex(pItem => pItem._id === post._id),
          1,
          post,
        );
      });
    }
  }

  deletePost(id: string) {
    this.dataSource.deletePost(id).subscribe(p => {
      this.posts.splice(this.posts.findIndex(pItem => pItem._id === id));
    });
  }

  getCategories(): string[] {
    return this.categories;
  }
}
