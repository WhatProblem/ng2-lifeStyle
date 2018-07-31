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

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let detailSortId = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe(data => {
      console.log(data);
    });
  }
}
