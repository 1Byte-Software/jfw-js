import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';
import { IPackage } from './package';
import { IUser } from './user';

export interface ILicense {
  id: IdType;
  isReadyToUse: boolean;
  createdDate: DateType;
  usedDate: DateType;
  usedByUserId: IdType;
  packageId: IdType;
  code: string;
  subscriptionTypeId: IdType;
  amount: number;
  startDate: DateType;
  endDate: DateType;
  package?: IPackage;
  user?: IUser;
  isUsed?: boolean;
}
export interface IGetListLicensesParams extends ICommonFilterParams {
  brandId?: IdType;
  packageId?: IdType;
  startDate?: string;
  endDate?: string;
  usedBy?: IdType;
  id?: IdType;
  isUsed?: boolean;
  brandCode?: string;
  testMode?: boolean;
  code?: string;
}
export interface IAddLicensePayload {
  brandCode: string;
  packageId: string;
  subscriptionTypeId: string;
  key?: string;
  startDate: DateType;
  endDate: DateType;
  description?: string;
  tags?: string;
  testMode: boolean;
}
export interface IDeleteLicensePath {
  licenseId: IdType;
}
export interface IMutateLicenseParams {
  licenseKey: string;
}
export interface IApplyLicenseForUserParams {
  brandUrl: string;
  licenseKey: string;
  userCode: string;
}
export interface IGenerateLicenseParams {
  brandId: string;
  packageId: string;
  subscriptionTypeId: string;
}
export interface IBuyLicensePayload {
  packageId: string;
  subscriptionTypeId: string;
  startDate: DateType;
  endDate: DateType;
  description: string;
  tags: string;
  testMode: boolean;
  quantity: number;
}
export interface IBuyLicenseCheckoutPayload extends IBuyLicensePayload {
  returnUrl: string;
  cancelUrl: string;
}
export interface IBuyLicenseWalletParams {
  walletCode: string;
}
export interface IBuyLicenseWalletPayload extends IBuyLicensePayload {
  brandCode: string;
  userCode: string;
}
export interface IPriceInfoDetails {
  subTotal: string;
  discount: string;
  total: string;
  numberTotal: number;
  one: string;
}
export interface IPriceInfo {
  [key: string]: IPriceInfoDetails;
}
export interface ILicenseStorage extends IBuyLicensePayload {
  walletCode: string | null;
  priceInfo: IPriceInfo[];
  priceSelected?: IPriceInfo;
  packageName: string;
  subscriptionTypeName: string;
}
export interface ILicenseStatistics {
  availablePercentage: number;
  unavailablePercentage: number;
  availableQuantity: number;
  unavailableQuantity: number;
}
export interface IGetLicenseStatisticsParams {
  userId: string;
  startDate?: DateType;
  endDate?: DateType;
  testMode?: boolean;
}
