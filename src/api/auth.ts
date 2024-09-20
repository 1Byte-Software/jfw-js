import { RawAxiosRequestHeaders } from 'axios';
import {
  IGetGoogleLinkParams,
  ILoginUsingEmailPayload,
  ISignInPayload,
  ISignInResponse,
} from '../models/interfaces';
import { get, post } from '../utils/axiosHelper';

const REST = 'users';
const GOOGLE = `v1/${REST}/auth/integrations/google/authenticate-url`;
const AUTH = `v1/${REST}/auth`;
const AUTH_BY_EMAIL = `${REST}/auth/by-email`;

export const getGoogleLinkAPI = async (
  params: IGetGoogleLinkParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<string> => {
  const url = `${GOOGLE}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const signInAPI = async (
  payload: ISignInPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ISignInResponse> => {
  const url = `${AUTH}`;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const loginUsingEmailAPI = async (
  payload: ILoginUsingEmailPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${AUTH_BY_EMAIL}`;

  const response = await post(url, payload, null, userHeaders);

  return response.data;
};
