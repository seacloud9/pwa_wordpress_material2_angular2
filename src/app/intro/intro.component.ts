import { Component, OnInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  xsconfig: Object = {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0
  };

  mdconfig: Object = {
    pagination: '.swiper-pagination',
    slidesPerView: 2,
    paginationClickable: true,
    spaceBetween: 0
  };

  lgconfig: Object = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0
  };

  xlconfig: Object = {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 0
  };

  constructor() { }


  ngOnInit() {
  }

}
