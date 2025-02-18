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

export type JFWError = {
  code: number;
  details: string;
  errorCode: number;
  logLevel: string;
  subcode: number;
};

export type JFWResponse<TData = any> = {
  data: TData | null;
  errors: JFWError[];
  message: string;
  statusCode: number;
  success: boolean;
};
