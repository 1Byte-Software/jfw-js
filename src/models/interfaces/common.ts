import { IdType } from '../types';

export interface IPagination {
  totalItems: number;
  totalPractices?: number;
  totalPages?: number;
  pageNumber?: number;
  pageSize?: number;
}
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
export interface IObjectHasKeyAsString<T> {
  [key: string]: T;
}
export interface IById {
  id: IdType;
}
