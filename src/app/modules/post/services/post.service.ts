import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/constants/urls';
import {IComment, IPost } from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = urls.posts;
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url)
  }
  getPostComments(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${this.url}/${id}/comments`)
  }
}
