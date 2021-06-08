import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {IUser} from '../models'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  state = new BehaviorSubject<string>('anonymous')
  constructor() { }

}

