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

  }

  initSwiper() {
    Promise.resolve().then(() => {
      let swiper = new Swiper('#popMusicSwiper', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // observer: true,
        // observeParents: true,
        // slidesPerGroup: 6,
        // loop: false,
        // loopFillGroupWithBlank: true,
      });
    });
  }
}
