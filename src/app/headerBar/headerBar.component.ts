import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../utils/eventService/event.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';
import { AuthService } from '../config/auth.service';
import { session } from '../utils/session/session';

@Component({
  selector: 'app-headerBar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderBarComponent implements OnInit {
  private ctrlLogin: boolean = true;

  private data: any[] = [
    {
      value: 'userInfo',
      label: '个人信息',
    },
    {
      value: 'logOut',
      label: '退出',
    }
  ];

  constructor(
    public ngEventService: NgEventService,
    public authService: AuthService,
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
    let self = this;
    let testStorage = session.get('testLogin');
    if (testStorage) {
      this.ctrlLogin = true;
    } else {
      this.ctrlLogin = false;
    }

    this.ngEventService.eventEmit.subscribe((value: any) => {
      if (value.logined === 'LOGIN_SUCCESS') {
        self.ctrlLogin = true;
      }
    });
  }

  handle(event: any): void {
    if (event.value === 'userInfo') {
      this.userInfo();
    } else if (event.value === 'logOut') {
      this.logOut();
    }
  }

  // 登录
  userInfo() {
    if (session.get('testLogin')) {
      this.router.navigate(['./profile']);
      // this.ctrlLogin = false;
    } else {
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

  // 退出
  logOut() {
    let self = this;
    let curUrl = this.location.path();
    if (curUrl.indexOf('profile') !== -1) {
      new Promise((resolve, reject) => {
        self.authService.logOut();
        resolve();
      }).then(() => {
        this.router.navigate(['/home']);
      });
    } else {
      this.authService.logOut();
    }
    this.ctrlLogin = false;
  }

  logIn() {
    let obj = {
      id: 1,
      name: 'ws',
      eventName: 'OPEN_LOGIN_MODAL'
    };

    // angular eventEmit
    this.ngEventService.eventEmit.emit(obj);
  }
}
