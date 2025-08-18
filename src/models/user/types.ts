import {
    IPageable,
    ISortable,
    IStatisticCommon,
    IStatisticCommonParams,
} from '../../core';
import { DateType, IdType } from '../base';
import { IBrand } from '../brand';
import { ICreateConfigurationParams } from '../configuration';
import { ConfigurationStatus } from '../configuration/constants';
import { IDevice } from '../device';
import { IPackage } from '../packages';
import { IRole } from '../role';
import {
    AuthenticationResponseType,
    BrandPartnerAuthenticateStatus,
    UserDeviceStatus,
    UserStatus,
    UserType,
} from './constants';

/**
 * This class is used to return user information to client.
 */
export interface IBaseUser {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The code of the user.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The avatar of the user.
     */
    avatar?: string | null;

    /**
     * The package id.
     *
     * @remarks min: 1
     */
    packageId: IdType;

    /**
     * The package code.
     *
     * @remarks min: 1
     */
    packageCode: string;

    /**
     * The email address of the user.
     */
    emailAddress?: string | null;

    /**
     * The nick name of the user.
     */
    nickName?: string | null;

    /**
     * The roles of the user.
     */
    roles?: string[] | null;
}

export interface IUser {
    /**
     * The id of the object.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The created date of the object.
     *
     * @remarks date-time
     */
    createdDate?: DateType | null;

    /**
     * The brand id.
     *
     * @remarks min: 1
     */
    brandId: IdType;

    /**
     * This class is used to return user information to client.
     */
    parentUser?: IBaseUser;
    /**
     * The user code.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The username.
     */
    username?: string | null;

    /**
     * The first name.
     */
    firstName?: string | null;

    /**
     * The last name.
     */
    lastName?: string | null;

    /**
     * The nick name.
     */
    nickName?: string | null;

    /**
     * The avatar.
     *
     * @remarks uri
     */
    avatar?: string | null;

    /**
     * The email address.
     */
    emailAddress?: string | null;

    /**
     * The phone number of the user.
     */
    phoneNumber?: string | null;

    /**
     * The website.
     *
     * @remarks uri
     */
    website?: string | null;

    /**
     * The bio.
     */
    bio?: string | null;

    /**
     * The type of the user.
     *
     * @remarks enum
     */
    type?: UserType;

    /**
     * The email address is verified.
     */
    isEmailAddressVerified: boolean;

    /**
     * The user is verified.
     */
    isUserVerified: boolean;

    /**
     * The risk mark.
     *
     * @remarks int32
     */
    riskMark?: number | null;

    /**
     * The list of the roles.
     */
    roles: IRole[];

    /**
     * The referral code.
     *
     * @remarks min: 1
     */
    referralCode: string;

    /**
     * The test mode.
     */
    testMode: boolean;

    /**
     * The tags.
     */
    tags?: string | null;

    /**
     * The status of the user.
     *
     * @remarks enum
     */
    status: UserStatus;

    /**
     * Is system user.
     */
    isSystem: boolean;

    /**
     * The package of the user.
     */
    package?: IPackage | null;

    /**
     * The package id.
     *
     * @remarks min: 1
     * @deprecated
     */
    packageId?: IdType | null;

    /**
     * The language code.
     *
     * @remarks min: 1
     */
    languageCode: string;

    /**
     * The time zone id.
     *
     * @remarks min: 1
     */
    timeZoneId: IdType;

    /**
     * The expiry date package of the user.
     *
     * @remarks date-time
     */
    expiryDate: DateType;

    /**
     * The theme style.
     */
    themeStyle?: string | null;

    /**
     * Enable sign in detection.
     */
    enableSignInDetection?: boolean | null;

    /**
     * Flag to check if the user is an integration from another application. E.g. Google, Apple, etc.
     */
    isUserIntegration: boolean;
}

export interface IDeviceOfUser extends IDevice {
    /**
     * The token of the user device.
     */
    token?: string | null;

    /**
     * The session of the user device.
     */
    session?: string | null;

    /**
     * @remarks enum
     */
    userDeviceStatus: UserDeviceStatus;
}

export interface IAppIntegrationAuthenticateURL {
    /**
     * The app authentication name.
     *
     * @remarks min: 1
     */
    appName: string;

    /**
     * The app authentication logo URL.
     *
     * @remarks uri - min: 1
     */
    logoURL: string;

    /**
     * The app authentication authenticate URL.
     *
     * @remarks uri - min: 1
     */
    authenticateURL: string;
}

export interface IAuthenticateResponse {
    /**
     * The id of the user.
     *
     * @remarks min: 1
     */
    id: IdType;

    /**
     * The user name.
     */
    username?: string | null;

    /**
     * The email.
     */
    emailAddress?: string | null;

    /**
     * The authentication key.
     *
     * @remarks min: 1
     */
    authKey: string;

    /**
     * The expiration time of the authentication key.
     *
     * @remarks date-time
     */
    expiresIn: DateType;
}

export interface IStatisticsUsers extends IStatisticCommon {}
//#region API types
export interface IGetUsersParams
    extends IPageable,
        ISortable<'code' | 'username' | 'status'> {
    /**
     * The list id of the user to filter.
     */
    ids?: string;

    /**
     * The role id of the user.
     */
    roleId?: IdType;

    /**
     * The code of the user.
     */
    code?: string;

    /**
     * The username of the user.
     */
    username?: string;

    /**
     * The type of the user.
     */
    userType?: string;

    /**
     * Filter with is email address verified.
     */
    isEmailAddressVerified?: boolean;

    /**
     * Filter with is user verified.
     */
    isUserVerified?: boolean;

    /**
     * The email address of the user.
     */
    testMode?: boolean;

    /**
     * The status of the user.
     *
     * @remarks enum
     */
    status?: UserStatus;

    /**
     * Filter with is system user.
     */
    isSystem?: boolean;

    /**
     * Th first name of the user.
     */
    firstName?: string;

    /**
     * The last name of the user.
     */
    lastName?: string;

    /**
     * The nickname of the user.
     */
    nickName?: string;

    /**
     * The avatar of the user.
     *
     * @remarks uri
     */
    avatar?: string;

    /**
     * The email address of the user.
     */
    emailAddress?: string;

    /**
     * The phone number 1
     * @deprecated
     */
    phoneNumber?: string;

    /**
     * The keywords to search.
     */
    keywords?: string;

    /**
     * The package id of the user.
     */
    packageId?: IdType;

    /**
     * The language code of the user.
     */
    languageCode?: string;

    /**
     * The time zone id of the user.
     */
    timeZoneId?: IdType;

    /**
     * The tracking level of the user.
     *
     * @remarks int32
     */
    trackingLevel?: number;

    /**
     * The referral code of the user.
     */
    referralCode?: string;
}

/**
 * The presentation data transfer object for updating the user.
 */
export interface IUpdateUserParams {
    /**
     * The username of the user.
     * @example "username"
     * @remarks min: 1
     */
    username: string;

    /**
     * The email address of the user.
     * @example "example@jframework.io"
     * @remarks email - min: 1
     */
    emailAddress?: string | null;

    /**
     * The nickname of the user.
     * @example "example"
     */
    nickName?: string | null;

    /**
     * The first name of the user.
     * @example "John"
     */
    firstName?: string | null;

    /**
     * The last name of the user.
     * @example "Doe"
     */
    lastName?: string | null;

    /**
     * The language code of the user.
     * The language code is composed of two parts: the language code and the country code.
     * The language code is a lowercase two-letter code derived from ISO 639-1.
     * The country code is an uppercase two-letter code derived from ISO 3166.
     *
     * @example "en-US"
     */
    languageCode?: string | null;

    /**
     * The id time zone of the user.
     */
    timeZoneId?: IdType | null;

    /**
     * The primary phone number of the user.
     * The phone number is in the E.164 format.
     *
     * @example "+1234567890"
     * @remarks tel
     */
    phoneNumber?: string | null;

    /**
     * The phone number 1 of the user.
     * The phone number is in the E.164 format.
     *
     * @example "+1234567890"
     * @remarks tel
     * @deprecated Will delete in future.
     */
    phoneNumber1?: string | null;

    /**
     * The avatar of the user.
     * The avatar is a URL of the image.
     *
     * @remarks uri
     */
    avatar?: string | null;

    /**
     * The bio is a short description of the user.
     * @example "example"
     */
    bio?: string | null;

    /**
     * The website of the user want to update.
     * The website is a URL of the user.
     *
     * @example "https://mywebsite.com"
     * @remarks uri
     */
    website?: string | null;
}

export interface IGetConfigurationsOfUserParams {
    /**
     * Filter by group code.
     */
    groupCode?: string;

    /**
     * Filter by code.
     */
    code?: string;

    /**
     * Filter by name.
     */
    name?: string;

    /**
     * Filter by description.
     */
    description?: string;

    /**
     * Filter by value.
     */
    value?: string;

    /**
     * Filter by status. This value includes the following options:
     *
     * @remarks enum
     */
    status?: ConfigurationStatus;
}

/**
 * This is the change password model.
 */
export interface IChangePasswordParams {
    /**
     * The old password of the user.
     *
     * @remarks min: 1
     */
    oldPassword: string;

    /**
     * The new password of the user.
     *
     * @remarks min: 1
     */
    newPassword: string;

    /**
     * The confirm password of the user.
     *
     * @remarks min: 1
     */
    confirmPassword: string;
}

/**
 * This is the model class for ForgotPassword.
 */
export interface IForgotPasswordParams {
    /**
     * This represents the email of the user.
     *
     * @remarks email - min: 1
     */
    emailAddress: string;

    /**
     * This represents the reset password link to be sent to the user. When the user clicks on the link, they will be redirected to the forgot password page and in this link includes the token parameter which is used to verify the user.
     *
     * @remarks uri - min: 1
     */
    resetPasswordLink: string;
}

export interface IAddDeviceToUserParams {
    /**
     * The id of the user
     */
    userId: IdType;

    /**
     * The id of the device to add.
     */
    deviceId: IdType;

    /**
     * The token of the device data. This token is used when push notification for the device.
     */
    token?: string | null;

    /**
     * The session of the device data and related with user.
     */
    session?: string | null;

    /**
     * The tags of the device.
     */
    tags?: string | null;

    /**
     * @remarks enum
     */
    status?: UserDeviceStatus;
}

export interface IGetAppIntegrationAuthenticateURLsParams {
    /**
     * The callback URL. It is the URL that the user will be redirected to after logging in.
     */
    callbackURL: string;

    /**
     * The return URL. It is the URL that the user will be redirected to after canceling the login.
     */
    returnURL: string;

    /**
     * The device code. It is the code that the user will be detected as a device.
     */
    deviceCode?: string;

    /**
     * The type response. It is the type of the response after the authentication success. The type includes the RedirectUrl or JsonFormat. By default, the type is RedirectUrl.
     *
     * @remarks enum
     */
    typeResponse?: AuthenticationResponseType;
}

/**
 * Contains the data for the registration form.
 */
export interface IRegisterNewUserParams {
    /**
     * The username that the user is registering with.
     *
     * This can be an email address or a username with format: [a-zA-Z0-9._-]{5}+
     *
     * @example "username"
     */
    username?: string | null;

    /**
     * The phone number that the user is registering with. The phone number is in the E.164 format.
     *
     * @example "+1234567890"
     * @remarks tel
     */
    phoneNumber?: string | null;

    /**
     * The password that the user is registering with.
     *
     * @example "password"
     * @remarks min: 1
     */
    password: string;

    /**
     * The email address that the user is registering with.
     *
     * This is used to receive emails from the system.
     *
     * @example "example@jframework.io"
     * @remarks min: 1
     */
    emailAddress?: string | null;

    /**
     * The first name of the user.
     *
     * @example "John"
     */
    firstName?: string | null;

    /**
     * The last name of the user.
     *
     * @example "Doe"
     */
    lastName?: string | null;

    /**
     * The nickname of the user.
     *
     * @example "JohnDoe"
     */
    nickName?: string | null;

    /**
     * The invitation code that the user is using to register.
     *
     * @example "INVITATIONCODE"
     */
    referralCode?: string | null;

    /**
     * The timezone id.
     *
     * @example "KIplKnap0Kp"
     */
    timeZoneId?: string | null;
}

export interface IRemoveDeviceFromUserParams {
    /**
     * The id of the user.
     */
    userId: IdType;

    /**
     * The id of the device.
     */
    deviceId: IdType;
}

export interface IApplyReferralCodeParams {
    referralCode: string;
}

export interface IAuthenticationByGoogleParams {
    /**
     * The callback URL that the user will be redirected to after logging in.
     */
    callbackURL: string;

    /**
     * The return URL that the user will be redirected to after canceling the login.
     */
    returnURL: string;

    /**
     * @remarks enum
     * The type response after the authentication success. The type includes the RedirectUrl or JsonFormat.
     * By default, the type is RedirectUrl.
     */
    typeResponse?: AuthenticationResponseType;
}

export interface IAuthenticationByPhoneNumberParams {
    /**
     * This represents the phone number of the user.
     *
     * @remarks min: 1
     */
    phoneNumber: string;

    /**
     * This represents the password of the user.
     *
     * @remarks min: 1
     */
    password: string;
}

/**
 * This is the model class for UserAuthenticationByEmail.
 */
export interface IAuthenticationByMagicLinkParams {
    /**
     * This represents the email address of the user.
     *
     * @remarks min: 1
     */
    emailAddress: string;

    /**
     * This represents the callback url.
     *
     * @remarks uri - min: 1
     */
    callbackURL: string;

    /**
     * This represents the return url.
     *
     * @remarks uri
     */
    returnURL?: string | null;
}

/**
 * This is the model class for UserAuthentication.
 */
export interface IAuthenticationParams {
    /**
     * This represents the username of the user.
     *
     * @remarks min: 1
     * @example join.doe
     */
    username: string;

    /**
     * This represents the password of the user.
     *
     * @remarks min: 1
     * @example password
     */
    password: string;
}

/**
 * This is the change password model.
 */
export interface IChangePasswordParams {
    /**
     * The old password of the user.
     * @remarks min: 1
     * @example
     * OldPassword
     */
    oldPassword: string;

    /**
     * The new password of the user.
     * @remarks min: 1
     * @example
     * NewPassword
     */
    newPassword: string;

    /**
     * The confirm password of the user.
     * @remarks min: 1
     * @example
     * NewPassword
     */
    confirmPassword: string;
}

/**
 * This is the model class for ResetPassword.
 */
export interface IResetPasswordParams {
    /**
     * This represents the email of the user.
     *
     * @remarks email · min: 1
     * @example
     * example@jframework.io
     */
    emailAddress: string;

    /**
     * This represents the token of the user.
     *
     * @remarks min: 1
     * @example
     * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
     */
    token: string;

    /**
     * This represents the new password of the user.
     *
     * @remarks min: 1
     * @example
     * newpassword
     */
    newPassword: string;
}

export interface IStatisticsUsersParams extends IStatisticCommonParams {}

export interface ICheckAuthKeyAvailableParams {
    authKey: string;
}

/**
 * This class represents the data transfer object for the user authentication verify OTP request.
 */
export interface IVerifyUserEmailAddressParams {
    /**
     * The token to verify. This is the token that was received from the request to send the OTP.
     *
     * @remarks min: 1
     * @example
     * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjEzNDU2Nzg5MzIifQ.1J7
     */
    token: string;

    /**
     * The OTP to verify.
     *
     * @remarks min: 1
     * @example
     * 123456
     */
    otp: string;
}

export type IVerifySMSOTPToAuthenticationParams = IVerifyUserEmailAddressParams;

export interface ICreateConfigurationOfUserParams
    extends ICreateConfigurationParams {}

export interface IBrandPartnerAuthenticate {
    /**
     * The user internal brand status.
     *
     * @remarks enum
     */
    status: BrandPartnerAuthenticateStatus;

    /**
     * The created date time.
     *
     * @remarks date-time
     */
    createdDate: DateType;

    /**
     * This class represents the Brand.
     */
    brand: IBrand;
}
//#endregion
