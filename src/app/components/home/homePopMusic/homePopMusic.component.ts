import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'home-popMusic',
  templateUrl: './homePopMusic.component.html',
  styleUrls: ['./homePopMusic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePopMusicComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.initSwiper();
  }

  initSwiper() {
    Promise.resolve().then(() => {
      let swiper = new Swiper('#popMusicSwiper', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 30,
      });
    });
  }
}
