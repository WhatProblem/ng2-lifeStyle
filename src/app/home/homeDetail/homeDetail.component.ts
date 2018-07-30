import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-homeDetail',
  templateUrl: './homeDetail.component.html',
  styleUrls: ['./homeDetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    console.log(this.route);
    this.route.data.subscribe(data => {
      console.log(data);
    });
  }
}
