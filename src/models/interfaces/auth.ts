export interface ISignInPayload {
  brandUrl: string;
  username: string;
  password: string;
}
export interface ISignInResponse {
  authKey: string;
  username: string;
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
