import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExCarouselComponent } from './components/ex-carousel/ex-carousel.component';
import { HomeComponent } from './components/home/home.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { Carousel3Component } from './components/carousel3/carousel3.component';

@NgModule({
  declarations: [
    AppComponent,
    ExCarouselComponent,
    HomeComponent,
    Carousel2Component,
    Carousel3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
