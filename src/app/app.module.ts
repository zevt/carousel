import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExCarouselComponent } from './components/ex-carousel/ex-carousel.component';
import { HomeComponent } from './components/home/home.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExCarouselComponent,
    HomeComponent,
    Carousel2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
