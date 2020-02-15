import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class PostRepository {
  private posts: Post[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getPosts().subscribe(data => {
      this.posts = data;
      // this.categories = data
      //   .map(p => p.category)
      //   .filter((ctg, index, array) => array.indexOf(ctg) === index)
      //   .sort();
    });
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: string): Post {
    return this.posts.find(p => p._id === id);
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
