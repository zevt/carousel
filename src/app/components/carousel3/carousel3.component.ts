import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.scss']
})
export class Carousel3Component implements OnInit {

  baseImage = './assets/images/underwater/underwater';
  images = [];
  private key = 0;
  private totalDisplay = 4;

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i < 9; ++i) {
      this.images.push({
        url: this.baseImage + i + '.jpg',
        id: i
      });
    }
  }

  shouldShow(i) {
    if (i >= this.key && i < this.key + this.totalDisplay) {
      return 'active';
    } else {
      return '';
    }
  }
  prev() {
    if (this.key > 0) {
      this.key = this.key - 1;
    }
  }
  next() {
    if (this.key <= this.images.length - this.totalDisplay) {
      this.key = this.key + 1;
    }
  }
}
