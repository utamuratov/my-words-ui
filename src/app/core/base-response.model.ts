import { ErrorType } from './handler-error.interceptor';

export interface BaseResponse<T> {
  status: boolean;
  data: T;
  error?: ErrorType;
}
