import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserResolveService} from './services/user-resolve.service';
import {PostsComponent} from './components/posts/posts.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostResolveService} from './services/post-resolve.service';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ],
    resolve: {data: UserResolveService}
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent}
    ],
    resolve: {data: PostResolveService},
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
