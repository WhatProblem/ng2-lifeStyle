import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from '../utils/eventService/event.service';


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

  constructor() { }

  ngOnInit() {
    let self = this;
    EventService.on('OPEN_LOGIN_MODAL', () => {
      self.ctrlModal = true;
    });
  }

  confirm() {
    this.ctrlModal = false;
  }
}
