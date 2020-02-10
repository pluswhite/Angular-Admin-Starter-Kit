import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { PostModule } from './post/post.module';
import { ModelModule } from './models/model.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    PostModule,
    ModelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
