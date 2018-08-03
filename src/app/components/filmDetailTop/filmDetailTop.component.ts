import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'film-filmDetailTop',
  templateUrl: './filmDetailTop.component.html',
  styleUrls: ['./filmDetailTop.component.scss']
})

export class FilmDetailTopComponent implements OnInit {
  private arrowIntroduce: boolean = true;
  
  constructor() { }

  ngOnInit() {

  }
}
