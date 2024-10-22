import { DateType, IdType } from '../types';
import { IFilterDate, IPaginationParams } from './filter';

export interface ICoupon {
  id: IdType;
  name: string;
  code: string;
  description: string;
  percentage: number;
  quantity?: number;
  status: string;
  createdDate: DateType;
  startDate: DateType;
  endDate: DateType;
  autoApplyToPrice: boolean;
}
export interface IGetListCouponsParams extends IPaginationParams, IFilterDate {
  startDate?: string;
  endDate?: string;
  code?: string;
  status?: string;
}
export interface IAddCouponPayload {
  name: string;
  code: string;
  description?: string;
  percentage: number;
  quantity?: number;
  startDate: DateType;
  endDate: DateType;
  autoApplyToPrice: boolean;
  status: string;
}
