import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post.model';
import { PostRepository } from '../models/post.repository';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public posts: Post[];
  constructor(private repository: PostRepository, public auth: AuthService) {
    this.repository.getPosts().subscribe(data => (this.posts = data));
  }

  ngOnInit(): void {}

  deletePost(id: string) {
    this.repository.deletePost(id);
  }
}
