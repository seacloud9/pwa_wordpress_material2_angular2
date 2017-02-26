import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'SeaCloud9 Blog';
  navOpen = false;
}
