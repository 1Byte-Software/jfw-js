export interface ISignInPayload {
  username: string;
  password: string;
}
export interface ISignInResponse {
  authKey: string;
  username: string;
}
export interface ISignUsingEmailPayload {
  email: string;
  callbackUrl: string;
  returnUrl: string;
}
export interface IGetGoogleLinkParams {
  callbackUrl: string;
  returnUrl: string;
}
