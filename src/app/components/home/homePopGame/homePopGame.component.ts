import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Route, Routes } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'home-popGame',
  templateUrl: './homePopGame.component.html',
  styleUrls: ['./homePopGame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePopGameComponent implements OnInit {
  public gameDetail: object = null;
  private popGamePoster: object[] = [];
  private ctrlShow: boolean = false;

  constructor(
    public router: Router
  ) { }

  @Input() set popGame(data) {
    if (data.length) {
      this.popGamePoster = data;
      this.initSwiper();
    }
  }

  ngOnInit() {

  }

  initSwiper() {
    Promise.resolve().then(() => {
      let swiper = new Swiper('#gameContainer', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '#gameNextBtn',
          prevEl: '#gamePrevBtn',
        },
      });
    });
  }

  showIntroduce(event, i, item) {
    this.gameDetail = item;
    this.ctrlShow = true;
    let clientX = (event.path[10]['offsetWidth'] - event.path[4]['offsetWidth']) / 2;
    let halfBodyWidth = event.path[10]['offsetWidth'] / 2;
    let swiperWidth = event.path[4]['offsetWidth'];
    let curX = event['clientX'];
    let curOffLeft = curX - clientX;
    let curOffTop = event['offsetY'] + 5;
    let gameSuspension = document.getElementsByClassName('gameSuspension')[0];
    if (curX < halfBodyWidth) {
      gameSuspension['style'].cssText = '';
      gameSuspension['style']['left'] = curOffLeft + 15 + 'px';
      gameSuspension['style']['top'] = curOffTop + 15 + 'px';
    } else {
      gameSuspension['style'].cssText = '';
      gameSuspension['style']['right'] = swiperWidth - curOffLeft + 5 + 'px';
      gameSuspension['style']['top'] = curOffTop + 5 + 'px';
    }
  }

  hideSuspension() {
    this.ctrlShow = false;
  }

  // 导航
  navigate(data) {
    this.router.navigate(['/home/homeDetail/' + data.game_role], { queryParams: { homeId: 'homeGameDetail', gameId: data.game_id } });
  }
}
