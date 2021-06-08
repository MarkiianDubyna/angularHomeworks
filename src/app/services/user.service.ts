import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants/urls';
import { IUser } from '../models';
import { DataTransferService } from './data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = urls.users;
  constructor(private httpClient: HttpClient) { }
  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url)
  }
}
