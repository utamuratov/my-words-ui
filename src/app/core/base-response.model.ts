export interface BaseResponse<T> {
  status: boolean;
  data: T;
  errors?: any;
}
