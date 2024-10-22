import { ICommonFilterParams, IPaginationParams, IUser } from '.';

export interface ICommissionRate {
  percentage: number;
  quantityFrom: number;
  quantityTo: number;
  type: string;
  user: IUser | null;
  id: string;
  description?: string;
  unit: string;
  isDefault: boolean;
}
export interface IGetCommissionDiscountParams {
  quantity: number;
}
export interface IGetListCommissionRatesParams
  extends IPaginationParams,
    ICommonFilterParams {
  type?: string;
  unit?: string;
}
export interface IAddCommissionRatePayload {
  userCode?: string;
  type: string;
  unit: string;
  quantityFrom?: number;
  quantityTo?: number;
  percentage: number;
  description?: string;
  isDefault?: boolean;
}
