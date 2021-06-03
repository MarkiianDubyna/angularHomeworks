import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models';
import { PostResolveService } from 'src/app/services/post-resolve.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute, private postResolveService: PostResolveService) {
    this.activatedRoute.data.subscribe(value => this.posts = value.data);
  }


  ngOnInit(): void {
  }

}
