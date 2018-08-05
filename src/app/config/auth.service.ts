import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { session } from '../utils/session/session';


@Injectable()
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(() => this.isLoggedIn = true);
  // }
  login() {
    console.log(456);
    // this.isLoggedIn = true;
    session.put('testLogin', 'abc123456789abc', true);
  }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }

  logOut() {
    // this.isLoggedIn = false;
    session.clear(true);
  }
}
