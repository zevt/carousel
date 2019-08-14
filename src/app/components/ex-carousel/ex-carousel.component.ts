import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ex-carousel',
  templateUrl: './ex-carousel.component.html',
  styleUrls: ['./ex-carousel.component.scss']
})
export class ExCarouselComponent implements OnInit {
  baseImage = './assets/images/cars/car';
  images = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i < 8; ++i) {
      this.images.push( {
        url: this.baseImage + i + '.jpg',
        id: i
      });
    }
  }

  initialActive(index): string {
    return index === 0 ? 'active' : '';
  }

}
