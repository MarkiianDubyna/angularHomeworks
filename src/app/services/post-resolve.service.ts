import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from '../models';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]>{

  constructor(private postService:PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPost[] | Observable<IPost[]> | Promise<IPost[]> {
        return this.postService.getAll()
    }
}
