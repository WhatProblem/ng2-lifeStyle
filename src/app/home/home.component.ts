import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  public popFilm: object[] = [];
  public popMusic: object[] = [];
  public popGame: object[] = [];
  private course: any;

  constructor(
    private http: HttpClient,
    private homeService: HomeService
  ) { }

  ngOnInit() {

    // const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1
    // }).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log('Error occured');
    //   });

    this.getHomePopFilm();
    this.getHomePopMusic();
    this.getHomePopGame();
  }

  // homePopFilm数据获取
  getHomePopFilm() {
    let self = this;
    let param = { film_score: '1.0' };
    this.homeService.getScoreFilms('get', 'homePopFilm', param).then(result => {
      if (result['code'] === 200) {
        self.popFilm = result['data']['data'];
      }
    });
  }

  // homePopMusic数据获取
  getHomePopMusic() {
    let self = this;
    let param = { music_score: '5.0' };
    this.homeService.getScoreMusics('get', 'homePopMusic', param).then(result => {
      if (result['code'] === 200) {
        self.popMusic = result['data']['data'];
      }
    });
  }

  // homePopGame数据获取
  getHomePopGame() {
    let self = this;
    let param = { game_power: '12000' };
    this.homeService.getPowerGames('get', 'homePopGame', param).then(result => {
      if (result['code'] === 200) {
        self.popGame = result['data']['data'];
      }
    });
  }
}
