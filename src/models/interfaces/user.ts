import { DateType, IdType } from '../types';
import { ICommonFilterParams } from './filter';
import { ILanguage } from './language';
import { IPackage } from './package';
import { IRole } from './role';
import { ITimezone } from './timezone';

export interface IUser {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  nickName: string;
  avatar?: string;
  emailAddress: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  phoneNumber3?: string;
  website?: string;
  packageId: IdType;
  expiryDate?: DateType;
  referralCode: string;
  commission: number;
  waitingPeriod: number;
  themeStyle?: string;
  languageCode: string;
  timeZoneId?: IdType;
  enableSignInDetection: boolean;
  trackingLevel: number;
  id: IdType;
  brandId: IdType;
  username: string;
  passphrase?: string;
  isEmailAddressVerified: boolean;
  isSystem: boolean;
  riskMark: number;
  modifiedDate: DateType;
  createdDate: DateType;
  isUserVerified: boolean;
  parentUser: IUser;
  bio?: string;
  code: string;
  roles: IRole[];
  language?: ILanguage;
  timeZone?: ITimezone;
  package?: IPackage;
  type: string;
  status: number;
  testMode?: boolean;
}
export interface IGetUserInfoByUsernamePath {
  username: string;
}
export interface IEditProfilePayload {
  username: string;
  emailAddress?: string;
  firstName?: string;
  phoneNumber1?: string;
  lastName?: string;
  website?: string;
  nickName?: string;
  avatar?: File | string;
  bio?: string;
  languageCode?: string;
  timeZoneId?: IdType;
}
export interface IGetUserByIdParams {
  authKey: string;
}
export interface IChangePasswordPayload {
  newPassword: string;
}
export interface IInitialSignUpValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ISignUpPayload {
  username: string;
  password: string;
  email: string;
  referralCode?: string;
  timeZoneId?: string;
  languageCode?: string;
  brandUrl?: string;
}
export interface IForgotPasswordPayload {
  email: string;
  resetPasswordLink: string;
  brandUrl?: string;
}
export interface IResetPasswordPayload {
  email: string;
  newPassword: string;
  token: string;
}
export interface IGetListUsersParams extends ICommonFilterParams {
  packageId?: IdType;
  languageCode?: string;
  loginName?: string;
  userId?: IdType;
  username?: string;
  status?: string;
  testMode?: boolean;
}
export interface IEditUserTypePath {
  userCode: string;
  type: string;
}
