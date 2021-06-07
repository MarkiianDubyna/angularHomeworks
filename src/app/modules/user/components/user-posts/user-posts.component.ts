import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, IUser } from 'src/app/models';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
posts: IPost[]
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  this.activatedRoute.params.subscribe(params => {
    const userId = params.id;
    this.userService.getUserPosts(userId).subscribe(value => this.posts = value)
  })
  }

  ngOnInit(): void {

  }
}

