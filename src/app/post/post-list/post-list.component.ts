import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostRepository } from '../../models/post.repository';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor(private repository: PostRepository) {}

  ngOnInit(): void {}

  getPosts(): Post[] {
    return this.repository.getPosts();
  }

  deletePost(id: number) {
    this.repository.deletePost(id);
  }
}
