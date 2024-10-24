import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface ISubscriptionType {
  id: IdType;
  name: string;
  description?: string;
  numberOfDays: number;
  isDefault: boolean;
  zOrder: number;
  createdDate: DateType;
  _id: string;
  status: number;
}
export interface IGetListSubscriptionTypesParams extends ICommonFilterParams {}
export interface IAddSubscriptionTypePayload {
  name: string;
  description?: string;
  numberOfDays: number;
  isDefault?: boolean;
  status: number;
}
