import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { SuspensionComponent } from '../../../suspension/suspension.component';

@Component({
  selector: 'home-popFilm',
  templateUrl: './homePopFilm.component.html',
  styleUrls: ['./homePopFilm.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePopFilmComponent implements OnInit {
  public popFilmData: object[] = [];
  public homeFilmPopData: object = null;
  private suspensionCtrl: boolean = false;
  private homePopPoster: object[] = [];

  constructor() { }

  @Input() set popFilm(data) {
    if (data.length) {
      this.homePopPoster = data;
      this.initSwiper();
    }
  }

  ngOnInit() {

  }

  initSwiper() {
    Promise.resolve().then(() => {
      let swipers = new Swiper('#homePopFilm', {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        loop: false,
        loopFillGroupWithBlank: true,
        // observer: true,
        // observeParents: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '#homeFilmNext',
          prevEl: '#homeFilmPrev',
        },
      });
    });
  }

  showSuspension(event?: any, index?: any, filmPoster?: any) {
    if (event) {
      let suspension = document.getElementsByClassName('suspension')[0];
      let curOffLeft = (event.path[9]['offsetWidth'] - event.path[4]['offsetWidth']) / 2;
      let curPosi = event['clientX'] - curOffLeft;
      let curWidth = event.target.offsetWidth;
      let curHeight = event.target.offsetHeight;
      suspension['style']['width'] = curWidth + 15 + 'px';
      suspension['style']['height'] = curHeight + 30 + 'px';
      suspension['style']['left'] = Math.floor(curPosi / (curWidth + 30)) * (curWidth + 30) + 'px';
      this.suspensionCtrl = true;
      this.homeFilmPopData = filmPoster;
    }
  }

  hideSuspension() {
    this.suspensionCtrl = false;
  }
}
