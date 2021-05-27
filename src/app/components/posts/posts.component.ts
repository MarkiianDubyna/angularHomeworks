import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: IPost[];
@Input()
userId: number;
  constructor(private postServive: PostService) { }

  ngOnInit(): void {
    this.postServive.getPosts(this.userId).subscribe(value => this.posts = value)
  }

}
