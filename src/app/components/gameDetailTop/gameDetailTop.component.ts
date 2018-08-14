import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'game-gameDetailTop',
  templateUrl: './gameDetailTop.component.html',
  styleUrls: ['./gameDetailTop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GameDetailTopComponent implements OnInit {
  private heroStory: boolean = false;
  private gameId: string = null;

  constructor() { }

  @Input() set gameDetailId(data) {
    if (data) {
      this.gameId = data;
    }
  }

  ngOnInit() {

  }

  showHeroStory() {
    this.heroStory = true;
  }
}
