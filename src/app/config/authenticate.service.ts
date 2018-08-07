import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad,
  Route
} from '@angular/router';
import { AuthService } from './auth.service';
import { NgEventService } from '../utils/eventService/ngEvent.service';
import { session } from '../utils/session/session';

@Injectable()
export class AuthenticateService implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
    public ngEventService: NgEventService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let url: string = state.url; // 即将要到达的路由

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 守卫子路由
    return this.canActivate(route, state);
  }

  // 路由守卫：未登录被保护模块
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    // if (this.authService.isLoggedIn) {
    // return true;
    // }
    if (session.get('AUTHENTICATE_LOGIN')) {
      return true;
    }

    // this.authService.redirectUrl = url;
    // let sessionId = '123456789';

    // let navigationExtras: NavigationExtras = {
    //   queryParams: { session_id: sessionId },
    //   fragment: 'anchor'
    // };

    // this.router.navigate(['/login'], navigationExtras);
    // this.router.navigate(['./login']);

    // 弹出登录框
    let obj = {
      id: 1,
      name: 'ws',
      eventName: 'OPEN_LOGIN_MODAL'
    };

    // angular eventEmit
    this.ngEventService.eventEmit.emit(obj);
    return false;
  }
}
