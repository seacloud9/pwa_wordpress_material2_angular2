import { Component, Input, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'PostListCard',
  styleUrls: ['post-list-card.directive.scss'],
  templateUrl: 'post-list-card.directive.html'
})

@Directive({
  selector: '[PostContent]'
})

export class PostListCard {
  @Input() PostContent: any;
  constructor(private router: Router) {

  }

  selectPost(slug) {
    slug = slug.split('/')
    this.router.navigate([slug[0],slug[1],slug[2], slug[3]]);
  }
}
