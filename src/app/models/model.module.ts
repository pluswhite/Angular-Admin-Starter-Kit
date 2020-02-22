import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PostRepository } from './post.repository';
import { RestDataSource } from './rest.datasource';
import { CategoryRepository } from './category.repository';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [PostRepository, RestDataSource, CategoryRepository],
})
export class ModelModule {}
