import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]
  catchedUser: IUser
  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.userService.getAllUsers().subscribe(value => this.users = value);
  }
  catchUser(value: IUser): void {
  this.catchedUser = value;
  }
}
