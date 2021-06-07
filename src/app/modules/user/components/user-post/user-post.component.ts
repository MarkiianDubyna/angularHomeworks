import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
@Input()
post: IPost
  constructor() { }

  ngOnInit(): void {
  }

}
