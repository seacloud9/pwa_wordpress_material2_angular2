import { Component, Injector, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-aframe',
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
