import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { urls } from '../constants';
import {IPost} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly url: string = urls.posts;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url)
  }

  getById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${this.url}/${id}`)
  }
}
