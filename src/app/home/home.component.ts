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
  }

  // homePopFilm数据获取
  getHomePopFilm() {
    let self = this;
    let param = { film_score: '7.0' };
    this.homeService.getScoreFilms('get', 'homePopFilm', param).then(result => {
      if (result['code'] === 200) {
        self.popFilm = result['data']['data'];
      }
    });
  }
}
