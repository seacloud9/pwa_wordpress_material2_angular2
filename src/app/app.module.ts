import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { PostListComponent, SocialDialogComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SanitizeHtml } from './shared/pipes/SanitizeHtml';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ResponsiveModule, ResponsiveConfig } from 'ng2-responsive';
import { ShareModule } from 'ng2share/share.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { SwiperModule } from 'angular2-useful-swiper';
import { LogService } from './shared/services/log.service';
import { VrModuleService } from './shared/services/vr-module.service';
import { StoreModule } from '@ngrx/store';
import * as vr_reducers  from './shared/reducers';
import {  Wrapper } from './wrapper/wrapper.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AframeComponent } from './aframe/aframe.component';
import { PostListCardComponent } from './post-list-card/post-list-card.component';
import { IntroComponent } from './intro/intro.component';
import { ng2Parallax  } from 'ang2-parallax/ng2parallax';


let config = {
  breakPoints: {
    xs: {max: 500},
    sm: {min: 501, max: 767},
    md: {min: 768, max: 1024},
    lg: {min: 1025, max: 2200},
    xl: {min: 2201}
  },
  debounceTime: 50 // allow to debounce checking timer
};

export function ResponsiveDefinition(){
  return new ResponsiveConfig(config);
};

export function createInstrumentOptions() {
  return {
    maxAge: 5
  }
}


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
    Wrapper,
    DynamicComponent,
    AframeComponent,
    PostListCardComponent,
    ng2Parallax,
    IntroComponent
  ],
  entryComponents:[SocialDialogComponent, DynamicComponent, AframeComponent],
  imports: [
    ShareModule,
    ResponsiveModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    SwiperModule,
    MaterialModule.forRoot(),
    ToastModule.forRoot(),
    RouterModule.forRoot(routes),
    StoreModule.provideStore( vr_reducers  )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: ResponsiveConfig,
    useFactory: ResponsiveDefinition
  }, LogService, VrModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
