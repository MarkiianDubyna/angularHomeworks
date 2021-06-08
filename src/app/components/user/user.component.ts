import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
    user: IUser
  @Output()
  lift = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  lifting() : void {
  this.lift.emit(this.user)
  }

}
