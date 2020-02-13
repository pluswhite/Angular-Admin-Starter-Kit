import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostRepository } from '../../models/post.repository';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  editing = false;
  post: Post = new Post();

  constructor(
    private repository: PostRepository,
    private router: Router,
    activeRoute: ActivatedRoute,
  ) {
    this.post = repository.getPost(Number(activeRoute.snapshot.params.id));
  }

  ngOnInit(): void {}

  save(form: NgForm) {
    this.repository.savePost(this.post);
    this.router.navigateByUrl('/posts');
  }
}
