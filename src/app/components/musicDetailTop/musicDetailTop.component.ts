import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'music-musicDetailTop',
  templateUrl: './musicDetailTop.component.html',
  styleUrls: ['./musicDetailTop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MusicDetailTopComponent implements OnInit {
  private musicId: string = null;

  constructor() { }

  @Input() set musicDetailId(data) {
    if (data) {
      this.musicId = data;
    }
  }

  ngOnInit() {

  }
}
