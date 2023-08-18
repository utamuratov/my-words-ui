import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../modules/authorization/service/auth.service';

@Injectable()
export class HanlerErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // retry(1), // Why I have to remove this line: beacuse of authorization part(Phone blocked after three requests)
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          inject(AuthService).logout();
        }
        return throwError(() => error);
      })
    );
  }
}
