import { Injectable } from '@angular/core';
import { HttpService } from '../sdk/http/http.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  constructor(private httpService: HttpService) { }

  /**
   * @description: 测试获取游戏列表数据
   * @param {user_id} 账户0001
   * @param {pages_index} 当前页
   * @param {pages_total} 每页总条数
   */
  getGameTotals(methods: string, url: string, param?: any): Promise<any> {
    return this.httpService.request(methods, url, param).then(res => {
      return res;
    });
  }

}
