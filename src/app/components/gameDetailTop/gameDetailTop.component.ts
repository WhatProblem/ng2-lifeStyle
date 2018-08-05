import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'game-gameDetailTop',
  templateUrl: './gameDetailTop.component.html',
  styleUrls: ['./gameDetailTop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GameDetailTopComponent implements OnInit {
  private heroStory: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  showHeroStory() {
    this.heroStory = true;
  }
}
