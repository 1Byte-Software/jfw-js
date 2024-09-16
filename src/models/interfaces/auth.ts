import ".";

export interface ISignInPayload {
    username: string;
    password: string;
}
export interface ISignInResponse {
    authKey: string;
    username: string;
}
export interface IGetTokenPayload {
    authKey: string;
    username: string;
}
export interface ITokenResponse {
    accessToken: string;
    refreshToken: string;
    userType: number;
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
    timeZoneCode?: string;
}
export interface IForgotPasswordPayload {
    email: string;
    resetPasswordLink: string;
}
export interface IResetPasswordPayload {
    email: string;
    newPassword: string;
    token: string;
}
export interface ILoginUsingEmailPayload {
    brandUrl: string;
    email: string;
    callbackUrl: string;
    returnUrl: string;
}
export interface IGetGoogleLinkParams {
    brandUrl: string;
    callbackUrl: string;
    returnUrl: string;
}
