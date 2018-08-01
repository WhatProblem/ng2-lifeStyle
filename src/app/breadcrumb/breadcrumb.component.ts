import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent implements OnInit {
  private breads: object[] = [];
  private curIndex: number = null;
  private breadUrl: string = '';

  constructor() { }

  @Input() set homeBread(data) {
    if (data.length) {
      this.breads = data;
      data.forEach((item, index) => {
        if (item.curPage) {
          this.curIndex = index;
          return;
        }
      });
    }
  }

  ngOnInit() {

  }
}
