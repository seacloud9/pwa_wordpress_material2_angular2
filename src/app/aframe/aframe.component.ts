import { Component, Injector, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-aframe',
  styleUrls: ['aframe.component.scss'],
  template:'<div [innerHTML]="html"></div>'
})
export class AframeComponent {
  html;

  constructor(private injector: Injector, private ref: ChangeDetectorRef, private sanitizer: DomSanitizer) {
    this.html = sanitizer.bypassSecurityTrustHtml(this.injector.get('html'));
  }

  ngOnInit() {
  }

}
