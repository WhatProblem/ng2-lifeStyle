import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../utils/eventService/event.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';
import { AuthService } from '../config/auth.service';
import { AuthenticateService } from '../config/authenticate.service';
import { HttpService } from '../sdk/http/http.service';

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
    public router: Router,
    public httpService: HttpService,
    public http: HttpClient
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
    this.ctrlModal = false;
    let param = {
      username: this.username,
      password: this.password
    };
    this.httpService.request('post', 'userLogin', param).then(res => {
      if (res['token']) {
        self.authService.login(res['token']);
        let obj = { logined: 'LOGIN_SUCCESS' };
        self.ngEventService.eventEmit.emit(obj);
      }
    });
  }

  // userLogin(methods: string, url: string, param?: any): Promise<any> {
  //   return this.httpService.request(methods, url, param).then(res => {
  //     return res;
  //   });
  // }
}
