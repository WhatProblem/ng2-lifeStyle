import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-homeDetail',
  templateUrl: './homeDetail.component.html',
  styleUrls: ['./homeDetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeDetailComponent implements OnInit {
  public homeBread: object[] = [];
  public filmDetailId: string = null;
  public musicDetailId: string = null;
  public gameDetailId: string = null;
  private showComponent: string = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let detailSortId = this.route.snapshot.paramMap.get('id');
    this.showComponent = this.route.snapshot.queryParams['homeId'];
    this.filmDetailId = this.route.snapshot.queryParams['filmId'];
    this.musicDetailId = this.route.snapshot.queryParams['musicId'];
    this.gameDetailId = this.route.snapshot.queryParams['gameId'];
    console.log(this.showComponent);
    this.route.data.subscribe(data => {
      let objFirst = { title: 'home', url: 'home', name: '首页' };
      let objSecond = null;
      data.curPage = 'CURPAGE';
      if (detailSortId) {
        objSecond = { title: detailSortId, url: '', name: detailSortId };
        this.homeBread = [objFirst, data, objSecond];
      } else {
        this.homeBread = [objFirst, data];
      }
    });
  }
}
