import { DateType, IdType } from "../types";
import { IRole } from "./role";

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
    oldPassword: string;
    newPassword: string;
}
