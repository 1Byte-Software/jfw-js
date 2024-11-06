import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';
import { IUser } from './user';

export interface IGenerateCheckoutLinkParams {
  providerMethod: string;
}

// Payment
export interface IPayment {
  id: IdType;
  merchantId: IdType;
  packageId: IdType;
  userId: IdType;
  paymentDate: DateType;
  amount: number;
  amountFee: number;
  package?: string;
  user?: IUser;
}
export interface IPaymentHistory {
  id: IdType;
  user?: IUser;
  paymentDate: DateType;
  amountGross: number;
  amountFee?: number;
  amountNet: number;
  currencyCode: string;
  paymentType: string;
  description: string;
  code: string;
  status: string;
  displayGross?: string;
  displayFee?: string;
  displayNet?: string;
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
export interface IGetPaymentHistoriesParams extends ICommonFilterParams {
  userId?: IdType;
  id?: IdType;
  brandId?: IdType;
  status?: string;
  packageId?: IdType;
  userCode?: string;
  emailAddress?: string;
  testMode?: boolean;
}

// Payment Providers
export interface IPaymentProvider {
  id: IdType;
  code: string;
  name: string;
  description: string;
  website: string;
  isDefault: boolean;
  createdDate: DateType;
  merchantType: IdType;
  status: string;
}
export interface IGetListPaymentProvidersParams extends ICommonFilterParams {
  id?: IdType;
  name?: string;
}

// Payment Methods
export interface IPaymentMethod {
  id: IdType;
  createdDate: DateType;
  isDefault: boolean;
  publicKey: string;
  privateKey: string;
  returnLink: string;
  cancelLink: string;
  cancelLinkWithoutLogin: string;
  ipnListenerLink: string;
  paymentInfo: string;
  paymentProviderId: IdType;
  interalNote: string;
  paymentProvider?: IPaymentProvider;
}
export interface IGetListPaymentMethodsParams extends ICommonFilterParams {
  brandId?: IdType;
  interalNote?: string;
}
export interface IAddPaymentMethodPayload {
  interalNote?: string;
  returnLink: string;
  cancelLink: string;
  cancelLinkWithoutLogin: string;
  ipnListenerLink: string;
  paymentInfo: string;
  publicKey: string;
  privateKey: string;
  brandId: IdType;
  paymentProviderId: IdType;
  status: number;
}

// Payment Overview
export interface IPaymentOverview {
  dailyRevenue: number;
  dailySells: number;
  totalRevenue: number;
  totalSells: number;
}

export interface IGetPaymentOverviewParams extends ICommonFilterParams {
  brandId?: IdType;
  testMode?: boolean;
}
