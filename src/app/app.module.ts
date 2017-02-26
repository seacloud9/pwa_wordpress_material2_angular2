import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import {ImageLazyLoadModule, WebWorkerService} from 'ng2-image-lazy-load';
import { WordpressService } from './shared/services/wordpress.service';
import { ViewportService } from './shared/services/viewport.service';
import { PostListComponent, SocialDialogComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SanitizeHtml } from './shared/pipes/SanitizeHtml';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ResponsiveModule, ResponsiveConfig } from 'ng2-responsive';
import { PostListCard } from './directives/post-list-card.directive';
import { CeiboShare } from 'ng2-social-share';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';


let config = {
  breakPoints: {
    xs: {max: 600},
    sm: {min: 601, max: 959},
    md: {min: 960, max: 1279},
    lg: {min: 1280, max: 1919},
    xl: {min: 1920}
  },
  debounceTime: 100 // allow to debounce checking timer
};

export function ResponsiveDefinition(){
  return new ResponsiveConfig(config);
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    HomeComponent,
    AboutComponent,
    SanitizeHtml,
    SocialDialogComponent,
    PostDetailComponent,
    CeiboShare,
    PostListCard
  ],
  entryComponents:[SocialDialogComponent],
  imports: [
    ResponsiveModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: ResponsiveConfig,
    useFactory: ResponsiveDefinition
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
