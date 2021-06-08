import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input()
catchedUser : IUser
  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
  }
  login(): void {
  this.dataTransfer.state.next(this.catchedUser.username)
  }
}
