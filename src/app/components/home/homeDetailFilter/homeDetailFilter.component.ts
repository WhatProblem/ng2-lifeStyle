import { Component, OnInit, Input, Output, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../../../sdk/http/http.service';

@Component({
  selector: 'homeDetail-filter',
  templateUrl: './homeDetailFilter.component.html',
  styleUrls: ['./homeDetailFilter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeDetailFilterComponent implements OnInit {
  private homeDetailData: object[] = [];
  private curIndex: number = null;
  private curShowDetail: string = null;
  private timeYear: string = '0';
  private musicType: string = '0';
  private filmType: string = '0';
  private gameType: string = '0';
  private projScore: string = '0';
  private gameDifficult: string = '0';

  constructor(
    public httpService: HttpService,
    private el: ElementRef,
    private renderer2: Renderer2
  ) { }

  @ViewChild('showSection') showSection: ElementRef;

  @Input() set filterType(data) {
    if (data) {
      this.curShowDetail = data;
      let param = null;
      if (data === 'homeFilmDetail') {
        param = {
          pages_index: '0',
          pages_total: '12',
          film_score: '0',
          film_time: '0',
          film_type: '0',
          user_id: '0001',
        }
      } else if (data === 'homeMusicDetail') {
        param = {
          pages_index: '0',
          pages_total: '12',
          music_score: '0',
          music_time: '0',
          music_type: '0',
          user_id: '0001',
        }
      } else {
        param = {
          pages_index: '0',
          pages_total: '12',
          game_hero_score: '0',
          game_hero_type: '0',
          game_hero_degree: '0',
          user_id: '0001',
        }
      }
      this.homeDetailFilter(param);
    }
  }

  ngOnInit() {
    // console.log(this.el.nativeElement.querySelector('.showSection'));
    // this.renderer2.setStyle(this.el.nativeElement.querySelector('.showSection'),'background','green');
    console.log(this.showSection.nativeElement.getBoundingClientRect());
  }

  // currentDate() {
  //   return new Date();
  // }

  homeDetailFilter(param) {
    let self = this;
    this.httpService.request('get', 'homeDetailFilter', param).then(res => {
      if (res['code'] === 200) {
        self.homeDetailData = res['data']['data'];
      }
    });
  }

  selectTimeYear(val) {
    console.log(val);
  }

  selectMusicType(val) {
    console.log(val);
  }

  selectFilmType(val) {
    console.log(val);
  }

  selectGameType(val) {
    console.log(val);
  }

  selectProjScore(val) {
    console.log(val);
  }

  selectGameDifficult(val) {
    console.log(val);
  }
}
