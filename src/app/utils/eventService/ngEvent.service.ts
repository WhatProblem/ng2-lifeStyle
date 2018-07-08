import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable()
export class NgEventService implements OnInit {
  public eventEmit: any;

  constructor() {
    // define emit event
    this.eventEmit = new EventEmitter();
  }

  ngOnInit() {

  }
}
