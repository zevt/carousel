import {Component, OnInit} from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
})
export class Carousel2Component implements OnInit {

  baseImage = './assets/images/underwater/underwater';
  images = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i < 6; ++i) {
      this.images.push({
        url: this.baseImage + i + '.jpg',
        id: i
      });
    }

    $('#carouselExample').on('slide.bs.carousel', (e) => {

      const ele = $(e.relatedTarget);
      const idx = ele.index();
      const itemsPerSlide = 4;
      const totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          // append slides to end
          if (e.direction === 'left') {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });

  }


  // initialActive(index): string {
  //   return index === 0 ? 'active' : '';
  // }
}
