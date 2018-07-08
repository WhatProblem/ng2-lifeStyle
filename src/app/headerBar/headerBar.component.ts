import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from '../utils/eventService/event.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';


@Component({
  selector: 'app-headerBar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderBarComponent implements OnInit {

  constructor(public ngEventService: NgEventService) { }

  ngOnInit() {

  }

  handle(index: string): void {
    console.log(index);
  }

  userInfo() {
    // nodejs eventEmitter2
    // EventService.emit('OPEN_LOGIN_MODAL');
    
    let obj = {
      id: 1,
      name: 'ws',
      eventName: 'OPEN_LOGIN_MODAL'
    };

    // angular eventEmit
    this.ngEventService.eventEmit.emit(obj);
  }
}
