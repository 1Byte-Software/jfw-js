import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface ITimezone {
  code: string;
  countryCode: string;
  description: string;
  displayName?: string;
  id: IdType;
  name: string;
  value: string;
  createdDate: DateType;
}
export interface IGetListTimezonesParams extends ICommonFilterParams {
  name?: string;
  countryCode?: string;
}
