import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EventService } from '../utils/eventService/event.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';
import { AuthService } from '../config/auth.service';
import { AuthenticateService } from '../config/authenticate.service';

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

  constructor(
    public ngEventService: NgEventService,
    public authService: AuthService,
    public router: Router
  ) { }

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

  login() {
    let self = this;
    // this.authService.redirectUrl = '/profile';
    this.ctrlModal = false;
    // this.authService.login().subscribe(() => {
    //   if (this.authService.isLoggedIn) {
    //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/profile';
    //     this.router.navigate([redirect]);
    //   }
    // });

    // let self = this;
    // new Promise((resolve, reject) => {
    //   self.authService.login();
    //   resolve();
    // }).then(() => {
    //   if (this.authService.isLoggedIn) {
    //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/profile';
    //     this.router.navigate([redirect]);
    //   }
    // });
    new Promise((resolve, reject) => {
      self.authService.login();
      resolve();
    }).then(() => {
      let obj = { logined: 'LOGIN_SUCCESS' };
      self.ngEventService.eventEmit.emit(obj);
    });
  }
}
