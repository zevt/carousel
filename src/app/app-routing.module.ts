import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExCarouselComponent} from './components/ex-carousel/ex-carousel.component';
import {HomeComponent} from './components/home/home.component';
import {Carousel2Component} from './components/carousel2/carousel2.component';

const routes: Routes = [
  {path: 'carousel', component: ExCarouselComponent},
  {path: 'carousel2', component: Carousel2Component},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
