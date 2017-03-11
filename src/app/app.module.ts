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
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { SwiperModule } from 'angular2-useful-swiper';
import { LogService } from './shared/services/log.service';
import { VrModuleService } from './shared/services/vr-module.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as vr_reducers  from './shared/reducers';
import {  Wrapper } from './wrapper/wrapper.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AframeComponent } from './aframe/aframe.component';
import { PostListCardComponent } from './post-list-card/post-list-card.component';


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
    Wrapper,
    DynamicComponent,
    AframeComponent,
    PostListCardComponent
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
    StoreModule.provideStore( vr_reducers  ),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: ResponsiveConfig,
    useFactory: ResponsiveDefinition
  }, LogService, VrModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
