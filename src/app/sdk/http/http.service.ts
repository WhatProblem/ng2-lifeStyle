import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise';

const baseUrl = 'http://localhost:9000/';

@Injectable()
export class HttpService {
  public wsInterface: object;

  constructor(public http: HttpClient) { }

  request(method: string, url: string, params?: any): Promise<any> {
    let self = this;
    let resp = null;
    return this.http.get('../../../assets/wsApi/interface.json').toPromise().then(res => {
      let apiUrl = res[url]['wsUrl'];
      let param = null;
      let httpUrl = null;
      if (method === 'get' || method === 'GET') {
        if (params) {
          param = self.dealGetParams(params);
          httpUrl = baseUrl + apiUrl + param;
        } else {
          httpUrl = baseUrl + apiUrl;
        }
        return self.http.get(httpUrl).toPromise().then(result => {
          resp = result;
          return resp;
        });
      } else if (method === 'post' || method === 'POST') {
        httpUrl = baseUrl + apiUrl;
        return self.http.post(httpUrl, params).toPromise().then(result => {
          resp = result;
          return resp;
        });
      }
    });
  }

  // deal with params of get
  dealGetParams(params: any) {
    let qsUrl = '';
    for (let key in params) {
      qsUrl += (key + '=' + params[key] + '&');
    }
    return '?' + qsUrl.slice(0, qsUrl.length - 1);
  }
}
