import { IPageable, ISortable } from '../../core';
import { DateType, IdType } from '../base';
import { ILanguage } from '../language';
import { IRole } from '../role';
import { ITimezone } from '../timezone';

export interface IBaseUser {
    code: string;
    avatar: string | null;
    packageId: IdType;
    packageCode: string | null;
    emailAddress: string;
    nickName: string;
    roles: string[];
    id: IdType;
    createdDate: DateType; 
}

export interface IUser {
    username: string;
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
    package?: string; // #CONFIRM: Return package type is string or IPackage ?
    type: string;
    status: number;
    testMode?: boolean;
}

export interface IReferee {
    emailAddress: string;
    firstName: string;
    lastName: string;
    nickName: string;
    createdDate: DateType;
}

//#region API types
export interface IQueryUserParams extends IPageable, ISortable {
    roleId?: IdType;
    code?: string;
    username?: string;
    userType?: string;
    isEmailAddressVerified?: boolean;
    isUserVerified?: boolean;
    testMode?: boolean;
    status?: string;
    isSystem?: boolean;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    avatar?: string;
    emailAddress?: string;
    phoneNumber?: string;
    keywords?: string;
    packageId?: IdType;
    languageCode?: string;
    timeZoneId?: string;
    trackingLevel?: number;
    referralCode?: string;
}

export interface IGetUserInfoByUsernamePath {
    username: string;
}
export interface IUpdateUserData {
    username?: string | null;
    emailAddress?: string | null;
    nickName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    languageCode?: string | null;
    timeZoneId?: IdType | null;
    phoneNumber?: string | null;
    phoneNumber1?: string | null;
    avatar?: string | null;
    bio?: string | null;
    website?: string | null;
}

export interface IGetUserConfigurationParams {
    code: string;
}
export interface IGetUserByIdParams {
    authKey: string;
}
export interface IChangePasswordParams {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}
export interface IInitialSignUpValues {
    username: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
}
export interface IRegisterParams {
    username: string;
    phoneNumber?: string | null;
    password: string;
    emailAddress?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    nickName?: string | null;
    referralCode?: string | null;
    timeZoneId?: IdType | null;
}
export interface IForgotPasswordParams {
    emailAddress: string;
    resetPasswordLink: string;
    brandUrl?: string;
}
export interface IResetPasswordParams {
    emailAddress: string;
    newPassword: string;
    token: string;
}

export interface IUpdateUserTypeParams {
    userCode: string;
    type: string;
}

export interface IApplyReferralCodeParams {
    referralCode: string;
}

export interface IAuthenticationByGoogleParams {
    callbackUrl: string;
    returnUrl: string;
}

export interface IAuthenticationParams {
    username: string;
    password: string;
}

export interface IAuthenticateResponse {
    authKey: string;
    username: string;
}

export interface IAuthenticateByEmailAddressParams {
    emailAddress: string;
    callbackUrl: string;
    returnUrl: string;
}

export interface ICheckAuthKeyAvailableParams {
    authKey: string;
}
//#endregion
