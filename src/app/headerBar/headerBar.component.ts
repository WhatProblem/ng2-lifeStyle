import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../utils/eventService/event.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';
import { AuthService } from '../config/auth.service';

@Component({
  selector: 'app-headerBar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderBarComponent implements OnInit {

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

  }

  handle(event: any): void {
    console.log(event);
    if (event.value === 'userInfo') {
      this.userInfo();
    } else if (event.value === 'logOut') {
      this.logOut();
    }
  }

  // 登录
  userInfo() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['./profile']);
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
  }
}
