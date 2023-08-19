import { Inject, Injectable } from '@angular/core';
import { DITokens } from './di-tokens';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { BaseResponse } from './base-response.model';
import { ErrorType } from './handler-error.interceptor';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  /**
   * Mock API: https://64c922d9b2980cec85c1f725.mockapi.io
   * @param url
   * @returns
   */
  private makeUrl(url: string) {
    return `${this.endpoint}${url}`;
  }

  /**
   *
   * @returns
   */
  private catchError<T>() {
    return catchError<BaseResponse<T>, Observable<BaseResponse<T>>>(
      (error: ErrorType) => {
        return of({ error, status: false } as BaseResponse<T>);
      }
    );
  }

  /**
   *
   * @param http
   */
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(DITokens.ENDPOINT) private endpoint: string
  ) {}

  /**
   *
   * @param url
   * @param params
   * @returns
   */
  get<T>(url: string, params?: HttpParams) {
    return this.http
      .get<BaseResponse<T>>(this.makeUrl(url), { params })
      .pipe(this.catchError<T>(), shareReplay(1));
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  post<T>(url: string, model?: any) {
    return this.http
      .post<BaseResponse<T>>(this.makeUrl(url), model)
      .pipe(this.catchError<T>(), shareReplay(1));
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  put<T>(url: string, model?: any) {
    return this.http
      .put<BaseResponse<T>>(this.makeUrl(url), model)
      .pipe(this.catchError<T>(), shareReplay(1));
  }

  /**
   *
   * @param url
   * @param body
   * @returns
   */
  delete<T>(url: string, body?: any) {
    return this.http
      .delete<BaseResponse<T>>(this.makeUrl(url))
      .pipe(this.catchError<T>(), shareReplay(1));
  }
}
