import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts?userId='
  constructor(private httpClient: HttpClient) { }
  getPosts(id: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.baseUrl + id)
  }
}
