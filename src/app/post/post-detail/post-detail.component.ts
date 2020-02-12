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
  post: Post[] = [];

  constructor(
    private repository: PostRepository,
    router: Router,
    activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {}
}
