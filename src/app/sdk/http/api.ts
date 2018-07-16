// api接口
import { HttpClient } from '@angular/common/http';
import wsUrl from './interface.json';

const baseUrl = 'http://localhost:9000';

export class WsApi {

  constructor(public http: HttpClient) { }

  get(url: string, param?: object) {
    if (param) {
      
    }
    let desUrl = baseUrl + wsUrl.url;
  }

}
