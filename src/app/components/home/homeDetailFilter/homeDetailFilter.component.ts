import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'homeDetail-filter',
  templateUrl: './homeDetailFilter.component.html',
  styleUrls: ['./homeDetailFilter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeDetailFilterComponent implements OnInit {
  private test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private curIndex: number = null;

  constructor() { }

  ngOnInit() {

  }

  showCover(index) {
    this.curIndex = index;
  }

  hideCover() {
    this.curIndex = null;
  }

  currentDate() {
    return new Date();
  }
}
