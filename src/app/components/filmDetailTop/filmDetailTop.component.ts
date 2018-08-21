import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../../sdk/http/http.service';
import { ElMessageService } from 'element-angular';

@Component({
  selector: 'film-filmDetailTop',
  templateUrl: './filmDetailTop.component.html',
  styleUrls: ['./filmDetailTop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FilmDetailTopComponent implements OnInit {
  private arrowIntroduce: boolean = false;
  private filmId: string = null;
  private filmDetailData: object = null;
  private filmScore: number = null;
  private showFilmScore: number = null;
  private talkContent: object[] = [];
  private filmTalkContent: string = '';

  constructor(
    public httpService: HttpService,
    private message: ElMessageService
  ) { }

  @Input() set filmDetailId(data) {
    if (data) {
      this.filmId = data;
      console.log(data);
      this.getFilmDetail(data);
      this.getFilmTalk(data);
    }
  }

  ngOnInit() {

  }

  showIntroduce() {
    this.arrowIntroduce = !this.arrowIntroduce;
  }


  getFilmDetail(val) {
    let self = this;
    let param = {
      film_id: val,
      user_id: '0001'
    }
    this.httpService.request('get', 'filmDetail', param).then(res => {
      if (res['code'] === 200) {
        self.filmDetailData = res['data'][0];
        self.filmScore = res['data'][0]['film_score'] - 6;
        self.showFilmScore = res['data'][0]['film_score'];
      }
    });
  }

  getFilmTalk(val) {
    let self = this;
    let param = {
      film_id: val,
      user_id: '0001'
    }
    this.httpService.request('get', 'getFilmTalk', param).then(result => {
      if (result['code'] === 200) {
        self.talkContent = result['data']['data'];
      }
    });
  }

  doScore(val) {
    let self = this;
    let param = {
      film_id: this.filmId,
      film_score: (val + 6)
    }
    this.httpService.request('post', 'doFilmScore', param).then(res => {
      if (res['code'] === 200) {
        self.filmScore = res['data'] - 6;
        self.showFilmScore = res['data'];
      } else if (res['code'] === 511) {
        self.message.show('请先登录!');
      }
    });
  }

  doFilmTalk(val) {
    let self = this;
    let param = {
      film_id: this.filmId,
      film_talk_content: val,
      user_id: '0001'
    }
    this.httpService.request('post', 'doFilmTalk', param).then(res => {
      if (res['code'] === 200) {
        self.getFilmTalk(self.filmId);
        self.filmTalkContent = '';
      } else if (res['code'] === 511) {
        self.message.show('请先登录!');
      }
    });
  }
}
