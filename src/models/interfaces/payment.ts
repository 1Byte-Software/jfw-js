import { DateType, IdType } from '../types';
import { ICurrency } from './currency';

export interface IFeature {
  code: string;
  description: string;
  id: IdType;
  name: string;
  quantity: number;
  tags?: string;
  zOrder: number;
  status: string;
}
export interface IPrice {
  amount: number;
  checkoutLink: string;
  code: string;
  createdDate: DateType;
  currency: string;
  description: string;
  id: IdType;
  packageId: IdType;
  status: number;
  subscriptionTypeId: IdType;
  zOrder: number;
  subscriptionName: string;
  displayAmount?: string;
  currencyData?: ICurrency;
}
export interface IPackage {
  code: string;
  createdDate: DateType;
  description: string;
  features: IFeature[];
  id: IdType;
  isDefault: boolean;
  modifiedDate: DateType;
  name: string;
  prices: IPrice[];
  tags: string | null;
  status: number;
  zOrder: number;
  patternAvatarUrl?: string;
  isFree: boolean;
}
export interface IGetDirectCheckoutLinkParams {
  providerMethod: string;
}
export interface IMutateLicenseParams {
  licenseKey: string;
}
export interface ICheckFeatureParams {
  userId: IdType;
  featureCode: string;
}
export interface IPaymentDetailPrice {
  packageName: string;
  subscriptionName: string;
  amount: number;
}
export interface IPaymentDetail {
  price: IPaymentDetailPrice;
  createdDate: DateType;
  amountFee: number;
  amount: number;
  currencyCode: string;
  invoiceNo: string;
}
export interface IPaymentProvider {
  code: string;
  isDefault: boolean;
  status: string;
  name: string;
}
