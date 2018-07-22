import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { SuspensionComponent } from '../../../suspension/suspension.component';

@Component({
  selector: 'home-popFilm',
  templateUrl: './homePopFilm.component.html',
  styleUrls: ['./homePopFilm.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePopFilmComponent implements OnInit {
  private suspensionCtrl: boolean = false;
  private homePopPoster: object[] = [
    { filmSrc: '../../../../assets/img/homePopFilm/1.jpg', filmName: '影片1', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/2.jpg', filmName: '影片2', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/3.jpg', filmName: '影片3', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/4.jpg', filmName: '影片4', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/5.jpg', filmName: '影片5', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/6.jpg', filmName: '影片6', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/7.jpg', filmName: '影片7', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/8.jpg', filmName: '影片8', filmScore: '9.8' },
    { filmSrc: '../../../../assets/img/homePopFilm/9.jpg', filmName: '影片9', filmScore: '9.8' }
  ];

  constructor() { }

  ngOnInit() {
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

  showSuspension(event, index) {
    let suspension = document.getElementsByClassName('suspension')[0];
    let curOffLeft = (event.path[9]['offsetWidth'] - event.path[4]['offsetWidth']) / 2;
    let curPosi = event['clientX'] - curOffLeft;
    let curWidth = event.target.offsetWidth;
    let curHeight = event.target.offsetHeight;
    suspension['style']['width'] = curWidth + 15 + 'px';
    suspension['style']['height'] = curHeight + 30 + 'px';
    suspension['style']['left'] = Math.floor(curPosi / (curWidth + 30)) * (curWidth + 30) + 'px';
    setTimeout(() => {
      this.suspensionCtrl = true;
    }, 1000);
  }

  hideSuspension() {
    this.suspensionCtrl = false;
  }
}
