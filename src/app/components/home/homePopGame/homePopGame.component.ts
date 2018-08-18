import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Route, Routes } from '@angular/router';
import Swiper from 'swiper';
import { HttpService } from '../../../sdk/http/http.service';
import { ElMessageService } from 'element-angular';

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
    public router: Router,
    public httpService: HttpService,
    private message: ElMessageService
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

  changeLock(val) {
    let param = {
      game_id: val.game_id,
      game_lock: val.game_lock == '0' ? '1' : '0',
      user_id: '0001'
    };
    let lockOrFavFlag = 'lock';
    this.changeFavOrLock(param, lockOrFavFlag);
  }

  changeFav(val) {
    let param = {
      game_id: val.game_id,
      game_favorite: val.game_favorite == '0' ? '1' : '0',
      user_id: '0001'
    };
    let lockOrFavFlag = 'fav';
    this.changeFavOrLock(param, lockOrFavFlag);
  }

  changeFavOrLock(param, lockOrFavFlag) {
    let self = this;
    this.httpService.request('post', 'popGameFavOrLock', param).then(res => {
      if (res['code'] === 200) {
        if (lockOrFavFlag === 'fav') {
          self.popGamePoster.forEach((item, index) => {
            if (item) {
              if (param['game_id'] === item['game_id']) {
                item['game_favorite'] = param['game_favorite'];
                return;
              }
            }
          });
        } else if (lockOrFavFlag === 'lock') {
          self.popGamePoster.forEach((item, index) => {
            if (item) {
              if (param['game_id'] === item['game_id']) {
                item['game_lock'] = param['game_lock'];
                return;
              }
            }
          });
        }
      } else if (res['code'] === 511) {
        self.message.show('请先登录!');
      }
    });
  }

  // 导航
  navigate(data) {
    this.router.navigate(['/home/homeDetail/' + data.game_role], { queryParams: { homeId: 'homeGameDetail', gameId: data.game_id } });
  }
}
