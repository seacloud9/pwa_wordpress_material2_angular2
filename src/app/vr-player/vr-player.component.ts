import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vr-player',
  templateUrl: './vr-player.component.html',
  styleUrls: ['./vr-player.component.scss']
})
export class VrPlayerComponent implements OnInit {

  elem: any;
  aframe: any;
  timeout: any;


  constructor(ref: ElementRef) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    this.aframe = this.elem.querySelector('a-scene');
  }


}


