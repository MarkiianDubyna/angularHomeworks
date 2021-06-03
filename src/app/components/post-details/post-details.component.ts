import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService:PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IPost
      if (state){
        this.post = state
      }else {
          this.postService.getById(id).subscribe(post => this.post = post)
      }
    })
  }
  ngOnInit(): void { }

}
