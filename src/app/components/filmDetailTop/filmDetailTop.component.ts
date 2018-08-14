import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../../sdk/http/http.service';

@Component({
  selector: 'film-filmDetailTop',
  templateUrl: './filmDetailTop.component.html',
  styleUrls: ['./filmDetailTop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FilmDetailTopComponent implements OnInit {
  private arrowIntroduce: boolean = false;
  private filmId: string = null;

  constructor(
    public httpService: HttpService
  ) { }

  @Input() set filmDetailId(data) {
    if (data) {
      this.filmId = data;
      console.log(data);
      this.getFilmDetail(data);
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
      console.log(res);
    });
  }
}
