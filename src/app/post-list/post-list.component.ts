import {Component, OnInit, ChangeDetectorRef, Optional} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Post} from './../shared/interfaces/wordpress';
import {MdDialog, MdDialogRef} from '@angular/material';
import {PostListCard} from '../directives/post-list-card.directive'
import {WordpressService} from './../shared/services/wordpress.service';


@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.scss'],
  providers: [WordpressService]
})

export class PostListComponent implements OnInit {
  _posts:Post[];


  constructor(private title: Title,
              private router: Router,
              private route: ActivatedRoute,
              private ref: ChangeDetectorRef,
              private wordpressService:WordpressService,
              public dialog: MdDialog
  ) {

  }

  openDialog() {
    let dialogRef = this.dialog.open(SocialDialogComponent);
  }

  getPosts(page = null){
    this.wordpressService
      .getPosts(( page === null ? null : page ))
      .subscribe(res => {
        this._posts = this.sortDate(res);
        this.ref.detectChanges();
      });
  }

  sortDate(_data:any[] ){
    for(let i = 0; i < _data.length; i++){
      _data[i].slugFormat = new Date(_data[i].date).toLocaleDateString('en-US',{ year: 'numeric' })
      _data[i].slugFormat  += "/" + new Date(_data[i].date).toLocaleDateString('en-US',{ month: '2-digit', day: '2-digit' })
    }
    return _data
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if(params['page'] !== undefined){
        this.getPosts(params['page']);
      }else{
        this.getPosts();
      }
    });

  }

  selectPost(slug) {
    slug = slug.split('/')
    this.router.navigate([slug[0],slug[1],slug[2], slug[3]]);
  }

}

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class SocialDialogComponent {
  constructor(@Optional() public dialogRef: MdDialogRef<SocialDialogComponent>) {}
}
