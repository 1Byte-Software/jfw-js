import { DateType, IdType } from '../types';
import { ICurrency } from './currency';
import { ICommonFilterParams } from './filter';
import { IPackage } from './package';

export interface IPrice {
  amount: number;
  checkoutLink: string;
  code: string;
  createdBy: IdType | null;
  createdDate: DateType;
  currency: string;
  description: string;
  id: IdType;
  modifiedBy: IdType | null;
  modifiedDate: DateType;
  name: string;
  packageId: IdType;
  paymentMethodId: IdType;
  status: number;
  subscriptionTypeId: IdType;
  zOrder: number;
  package?: IPackage;
  subscriptionName: string;
  displayAmount?: string;
  currencyData?: ICurrency;
}

export interface IGetListPricesParams extends ICommonFilterParams {
  brandCode?: string;
  name?: string;
  code?: string;
  packageId?: string;
  subscriptionTypeId?: string;
}
export interface IAddPricePayload {
  brandId: IdType;
  paymentMethodId: IdType;
  packageId: IdType;
  subscriptionTypeId: IdType;
  code: string;
  name: string;
  description?: string;
  amount: number;
  currency: string;
  checkoutLink: string;
  status: number;
}
