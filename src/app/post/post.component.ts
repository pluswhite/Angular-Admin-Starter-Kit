import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post.model';
import { PostRepository } from '../models/post.repository';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public posts: Post[];
  constructor(private repository: PostRepository) {
    this.repository.getPosts().subscribe(data => (this.posts = data));
  }

  ngOnInit(): void {}

  deletePost(id: string) {
    this.repository.deletePost(id);
  }
}
