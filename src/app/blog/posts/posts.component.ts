import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { AuthService } from '../../services/auth.service';
import { PostRepository } from '../../models/post.repository';

@Component({
  selector: 'app-post-list',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts: Post[];
  constructor(private repository: PostRepository, public auth: AuthService) {
    this.repository.getPosts().subscribe(data => (this.posts = data));
  }

  ngOnInit() {}

  deletePost(id: string) {
    this.repository.deletePost(id);
  }
}
