import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from '../utils/eventService/event.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginedComponent implements OnInit {
  private ctrlModal: boolean = false;
  private username: string = '';
  private password: string = '';

  constructor(public ngEventService: NgEventService) { }

  ngOnInit() {
    let self = this;

    // nodejs eventemitter2
    // EventService.on('OPEN_LOGIN_MODAL', () => {
    //   self.ctrlModal = true;
    // });

    // angular eventEmit
    this.ngEventService.eventEmit.subscribe((value: any) => {
      if (value.eventName === 'OPEN_LOGIN_MODAL') {
        self.ctrlModal = true;
      }
    });
  }

  confirm() {
    this.ctrlModal = false;
  }
}
