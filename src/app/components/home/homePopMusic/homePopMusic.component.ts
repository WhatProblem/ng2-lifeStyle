import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { HttpService } from '../../../sdk/http/http.service';

@Component({
  selector: 'home-popMusic',
  templateUrl: './homePopMusic.component.html',
  styleUrls: ['./homePopMusic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePopMusicComponent implements OnInit {
  private homePopPoster: object[] = [];
  private curIndex: number;

  constructor(
    public httpService: HttpService
  ) { }

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

  changeFav(val) {
    let self = this;
    let param = {
      music_id: val.music_id,
      music_favorite: val.music_favorite === '0' ? '1' : '0',
      user_id: '0001'
    };
    this.httpService.request('post', 'popMusicFav', param).then(res => {
      if (res['code'] === 200) {
        self.homePopPoster.forEach((item, index) => {
          if (item) {
            if (val['music_id'] === item['music_id']) {
              item['music_favorite'] = param['music_favorite'];
              return;
            }
          }
        });
      }
    });
  }
}
