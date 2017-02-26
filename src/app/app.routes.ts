import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'post', component: PostListComponent
  },
  {
    path: 'page/:page', component: PostListComponent
  },
  {
    path: ':year/:month/:day/:slug',
    component: PostDetailComponent
  },
  { path: 'about', component: AboutComponent }
];
