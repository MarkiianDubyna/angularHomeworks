import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models';
import { UserResolveService } from 'src/app/services/user-resolve.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: IUser[];
  constructor(private activatedRoute: ActivatedRoute, private userResolveService: UserResolveService) {
    this.activatedRoute.data.subscribe(value => this.users = value.data);
  }

  ngOnInit(): void { }

}
