import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = urls.users;
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url)
  }
  getByUserId(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.url}/${id}`)
  }

}
