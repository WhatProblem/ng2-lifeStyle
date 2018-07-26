import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'home-popGame',
  templateUrl: './homePopGame.component.html',
  styleUrls: ['./homePopGame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePopGameComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

  initSwiper() {
    Promise.resolve().then(() => {
      let swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  }
}
