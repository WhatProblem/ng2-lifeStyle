import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homeBan',
  templateUrl: './homeBan.component.html',
  styleUrls: ['./homeBan.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeBanComponent implements OnInit {
  private label: string = 'test';
  private testArr: object = ['第一个', '第二个', '第三个'];
  constructor() { }

  ngOnInit() {

  }
}
