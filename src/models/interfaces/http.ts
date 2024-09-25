import { IPagination } from './filter';

export interface IListResponse<T> {
  items: T[];
  pagination: IPagination | null;
}
export interface IResponse<T> {
  statusCode?: number;
  data: T | null;
}
export interface IErrorNotPermission {
  httpCode: number;
}
export interface IResponseNotPermission {
  error: IErrorNotPermission;
}
