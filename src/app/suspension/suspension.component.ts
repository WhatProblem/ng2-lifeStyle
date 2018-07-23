import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-suspension',
  templateUrl: 'suspension.component.html',
  styleUrls: ['./suspension.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuspensionComponent implements OnInit {
  public detailData: object = null;

  constructor() { }

  @Input() set suspension(data: object) {
    if (data) {
      this.detailData = data;
    }
  }

  ngOnInit() {

  }

}
