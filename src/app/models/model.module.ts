import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PostRepository } from './post.repository';
import { RestDataSource } from './rest.datasource';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [PostRepository, RestDataSource],
})
export class ModelModule {}
