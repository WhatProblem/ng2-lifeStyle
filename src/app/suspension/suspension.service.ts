import { Injectable } from '@angular/core';
import { HttpService } from '../sdk/http/http.service';

@Injectable()
export class SuspensionService {

  constructor(
    public httpService: HttpService
  ) { }

  /**
   * @description: home部分的popFilm加锁控制
   * @param {film_id} 影片id
   * @param {film_lock} 0:未加锁
   * @param {user_id} 用户id
   */
  changeLock(methods: string, url: string, param?: any): Promise<any> {
    return this.httpService.request(methods, url, param).then(res => {
      return res;
    });
  }
}
