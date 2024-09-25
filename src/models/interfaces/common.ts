import { IdType } from '../types';

export interface IObjectHasKeyAsString<T> {
  [key: string]: T;
}
export interface IById {
  id: IdType;
}
