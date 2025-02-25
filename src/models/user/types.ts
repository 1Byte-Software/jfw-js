import { DateType, IdType } from '../base';
import { ILanguage } from '../language';
import { IPackage } from '../packages';
import { IRole } from '../role';
import { ITimezone } from '../timezone';

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
    package?: IPackage;
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
export interface IQueryUserParams {
    packageId?: IdType;
    languageCode?: string;
    loginName?: string;
    userId?: IdType;
    username?: string;
    status?: string;
    testMode?: boolean;
}

export interface IGetUserInfoByUsernamePath {
    username: string;
}
export interface IUpdateProfileParams {
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
    password: string;
    emailAddress: string;
    referralCode?: string;
    timeZoneId?: string;
    languageCode?: string;
    brandUrl?: string;
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
//#endregion
