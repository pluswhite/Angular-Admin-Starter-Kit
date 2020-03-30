import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { AuthService } from '../../services/auth.service';
import { PostRepository } from '../../models/post.repository';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  public posts: Post[];
  constructor(private repository: PostRepository, public auth: AuthService) {
    this.repository.getPosts().subscribe(data => (this.posts = data));
  }

  ngOnInit() {}

  deletePost(id: string) {
    this.repository.deletePost(id);
  }
}
