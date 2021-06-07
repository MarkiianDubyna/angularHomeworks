import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user-service.service';
import { UserComponent } from './components/user/user.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPostComponent } from './components/user-post/user-post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostsComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
