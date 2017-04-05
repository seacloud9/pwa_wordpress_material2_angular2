import { Component, OnInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  config: Object = {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0
  };

  constructor() { }


  ngOnInit() {
  }

}
