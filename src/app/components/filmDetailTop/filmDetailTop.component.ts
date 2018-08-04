import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'film-filmDetailTop',
  templateUrl: './filmDetailTop.component.html',
  styleUrls: ['./filmDetailTop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FilmDetailTopComponent implements OnInit {
  private arrowIntroduce: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  showIntroduce() {
    this.arrowIntroduce = !this.arrowIntroduce;
  }
}
