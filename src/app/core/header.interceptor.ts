import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './constants';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem(Constants.ACCESS_TOKEN)
    );
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
