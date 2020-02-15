import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post.model';
import { PostRepository } from '../models/post.repository';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private repository: PostRepository) {}

  ngOnInit(): void {}

  getPosts(): Post[] {
    return this.repository.getPosts();
  }

  deletePost(id: number) {
    this.repository.deletePost(id);
  }
}
