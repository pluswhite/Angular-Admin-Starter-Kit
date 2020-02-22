import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryRepository } from '../../models/category.repository';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories: Category[];
  constructor(private repository: CategoryRepository) {
    this.repository.getCategories().subscribe(data => (this.categories = data));
  }

  ngOnInit(): void {}
}
