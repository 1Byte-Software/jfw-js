export interface ISignInPayload {
  username: string;
  password: string;
  brandUrl?: string;
}
export interface ISignInResponse {
  authKey: string;
  username: string;
}
export interface ISignUsingEmailPayload {
  emailAddress: string;
  callbackUrl: string;
  returnUrl: string;
  brandUrl?: string;
}
export interface IGetGoogleLinkParams {
  callbackUrl: string;
  returnUrl: string;
}
