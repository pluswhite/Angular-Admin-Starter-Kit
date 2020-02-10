import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../models/post.model';
import { PostRepository } from '../models/post.repository';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public selectedCategory = null;
  public postsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: PostRepository, private router: Router) {}

  ngOnInit(): void {}

  get posts(): Post[] {
    const pageIndex = (this.selectedPage - 1) * this.postsPerPage;

    return (
      this.repository
        // .getPosts(this.selectedCategory)
        .getPosts()
        .slice(pageIndex, pageIndex + this.postsPerPage)
    );
  }
}
