import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from '../utils/eventService/event.service';


@Component({
  selector: 'app-headerBar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  handle(index: string): void {
    console.log(index);
  }

  userInfo() {
    EventService.emit('OPEN_LOGIN_MODAL');
  }
}
