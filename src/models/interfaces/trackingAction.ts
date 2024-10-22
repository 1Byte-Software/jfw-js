import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';

export interface ITrackingAction {
  groupCode: string;
  code: string;
  name: string;
  trackingLevel: number;
  description: string;
  isSystem: boolean;
  createdDate: DateType;
  _id: IdType;
  id: IdType;
}
export interface IGetListTrackingEventParams extends ICommonFilterParams {
  id?: IdType;
  name?: string;
  brandId?: IdType;
}
