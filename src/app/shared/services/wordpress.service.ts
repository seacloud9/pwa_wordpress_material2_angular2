import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';



import { Post } from '../interfaces/WordPress';


@Injectable()
export class WordpressService {
  private postsUrl = "http://i-create.org/wp-json/wp/v2/";
  private store: { post: Post[] };
  post: Observable<Post[]>;
  private _post: BehaviorSubject<Post[]>;

  constructor(private $http: Http) {}


  getPosts(page:string = null): Observable< Post[] > {
    this.post =  this.$http
      .get((page === null ? this.postsUrl + 'posts' : this.postsUrl + 'posts?page=' +  page))
      .map((res: Response) => {
        this.store = { post: res.json()};
        this._post = new BehaviorSubject(Object.assign({}, this.store).post);
        return this.store.post
      });
    return this.post
  }

  getPost(slug): Observable<Post> {
    return this.$http
      .get(this.postsUrl + `posts?slug=${slug}`)
      .map((res: Response) => res.json());
  }

}

