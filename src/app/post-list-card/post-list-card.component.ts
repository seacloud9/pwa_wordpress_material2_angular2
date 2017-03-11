import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'PostListCard',
  templateUrl: './post-list-card.component.html',
  styleUrls: ['./post-list-card.component.scss']
})
export class PostListCardComponent implements OnInit {

  @Input() PostContent: any;
  constructor(private router: Router) {

  }

  selectPost(slug) {
    slug = slug.split('/')
    this.router.navigate([slug[0],slug[1],slug[2], slug[3]]);
  }


  ngOnInit() {
  }

}
