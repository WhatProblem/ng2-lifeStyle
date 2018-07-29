import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gameSuspension',
  templateUrl: './gameSuspension.component.html',
  styleUrls: ['./gameSuspension.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameSuspensionComponent implements OnInit {
  private heroInfo: object = null;

  constructor() { }

  @Input() set gameDetail(data) {
    if (data) {
      this.heroInfo = data;
    }
  }

  ngOnInit() { }
}
