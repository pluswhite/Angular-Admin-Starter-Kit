import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryRepository } from '../../models/category.repository';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  category: Category = new Category();

  constructor(
    public repository: CategoryRepository,
    public router: Router,
    activeRoute: ActivatedRoute,
  ) {
    const id = activeRoute.snapshot.params.id;
    this.repository.getCategory(id).subscribe(data => (this.category = data));
  }

  ngOnInit(): void {}
}
