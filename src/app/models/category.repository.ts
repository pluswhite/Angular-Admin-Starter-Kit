import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from './category.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class CategoryRepository {
  categories: Category[] = [];
  constructor(private dataSource: RestDataSource) {}

  getCategories(): Observable<Category[]> {
    return this.dataSource.getCategories();
  }

  getCategory(id: string): Observable<Category> {
    return this.dataSource.getCategoryById(id);
  }
}
