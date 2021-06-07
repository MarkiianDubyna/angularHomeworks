import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/constants/urls';
import {IPost, IUser} from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = urls.users;
  constructor(private httpClient: HttpClient) { }
  getAllUsers():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url);
  }
  getUserPosts(id: number):Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${this.url}/${id}/posts`)
  }
}
