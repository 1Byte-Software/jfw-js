import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface ITimezone {
  id: IdType;
  countryCode: string;
  description: string;
  code: string;
  name: string;
  value: string;
  createdDate: DateType;
}
export interface IGetListTimezonesParams extends ICommonFilterParams {
  name?: string;
  countryCode?: string;
}
