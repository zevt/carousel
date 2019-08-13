import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ex-carousel',
  templateUrl: './ex-carousel.component.html',
  styleUrls: ['./ex-carousel.component.scss']
})
export class ExCarouselComponent implements OnInit {

  data = [
    {url: './assets/images/cars/car1.jpg', id: 1},
    {url: './assets/images/cars/car2.jpg', id: 2},
    {url: './assets/images/cars/car3.jpg', id: 3},
    {url: './assets/images/cars/car4.jpg', id: 4},
    {url: './assets/images/cars/car5.jpg', id: 5},
    {url: './assets/images/cars/car6.jpg', id: 6},
    {url: './assets/images/cars/car6.jpg', id: 7},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  initialActive(index): string {
    return index === 0 ? 'active' : '';
  }

  getI(i) {
    return i;
  }
}
