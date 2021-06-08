import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginUserName: string
  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
    this.dataTransfer.state.subscribe(value => this.loginUserName = value);
  }

}
