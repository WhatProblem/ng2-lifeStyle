import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/observable';


@Injectable()
export class WsHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqs = req.clone({
      setHeaders: {
        Authorization: 'JWT'
      }
    });
    // return next.handle(reqs);


    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', 'token <your GitHub token>')
    // });
    // console.log(authReq);
    // return next.handle(req);
    return next.handle(reqs).map(event => {
      if (event instanceof HttpResponse) {
        if (event.status === 401) {
          // JWT expired, go to login
        }
      }
      return event;
    });
  }
}

