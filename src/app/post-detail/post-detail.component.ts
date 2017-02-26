import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from './../shared/interfaces/wordpress';
import {WordpressService} from './../shared/services/wordpress.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  providers: [WordpressService]
})

export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(private postsService: WordpressService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) { }

  getPost(slug){
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
        this.ref.detectChanges();
          window['catchAllImgageErrors']()
      });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost(slug)
    });

  }

  selectPost(slug) {
    slug = slug.split('/')
    this.router.navigate([slug[0],slug[1],slug[2], slug[3]]);
  }

}
