import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'home-popFilm',
  templateUrl: './homePopFilm.component.html',
  styleUrls: ['./homePopFilm.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePopFilmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let swipers = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 6,
      loop: false,
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
