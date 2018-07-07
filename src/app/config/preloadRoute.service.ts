import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PreloadRouteService implements PreloadingStrategy {
  // 预加载的模块
  preloadModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.preloadModules.push(route.path);
      console.log('预加载：' + route.path);
      return load();
    } else {
      return Observable.of(null);
    }
  }
}
