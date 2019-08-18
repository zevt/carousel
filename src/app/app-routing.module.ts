import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExCarouselComponent} from './components/ex-carousel/ex-carousel.component';
import {HomeComponent} from './components/home/home.component';
import {Carousel2Component} from './components/carousel2/carousel2.component';
import {Carousel3Component} from './components/carousel3/carousel3.component';

const routes: Routes = [
  {path: 'components/carousel', redirectTo: '/carousel'},
  {path: 'components/carousel2', redirectTo: '/carousel2'},
  {path: 'components/carousel3', redirectTo: '/carousel3'},
  {path: 'carousel', component: ExCarouselComponent},
  {path: 'carousel2', component: Carousel2Component},
  {path: 'carousel3', component: Carousel3Component},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
