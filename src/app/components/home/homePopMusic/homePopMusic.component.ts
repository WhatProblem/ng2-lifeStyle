import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'home-popMusic',
  templateUrl: './homePopMusic.component.html',
  styleUrls: ['./homePopMusic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePopMusicComponent implements OnInit {
  private homePopPoster: object[] = [];
  private curIndex: number;

  constructor() { }

  @Input() set popMusic(data) {
    if (data.length) {
      this.homePopPoster = data;
      this.initSwiper();
    }
  }

  ngOnInit() {

  }

  initSwiper() {
    Promise.resolve().then(() => {
      let swiper = new Swiper('#popMusicSwiper', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 40,
        navigation: {
          nextEl: '#homeMusicNext',
          prevEl: '#homeMusicPrev',
        },
      });
    });
  }

  showPlayIcon(index) {
    this.curIndex = index;
  }

  hidePlayIcon() {
    this.curIndex = null;
  }
}
