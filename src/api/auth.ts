import { RawAxiosRequestHeaders } from 'axios';
import {
  IGetGoogleLinkParams,
  ISignUsingEmailPayload,
  ISignInPayload,
  ISignInResponse,
  JFWResponse,
} from '../models/interfaces';
import { get, post } from '../utils/axiosHelper';

const REST = 'users';
const AUTH = `v1/${REST}/auth`;
const AUTH_BY_EMAIL = `v1/${REST}/auth/by-email`;
const GOOGLE = `v1/${REST}/auth/integrations/google/authenticate-url`;

export const getGoogleLinkAPI = async (
  params: IGetGoogleLinkParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<string> => {
  const url = `${GOOGLE}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const signInUsingUsernameAPI = async (
  payload: ISignInPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ISignInResponse> => {
  const url = `${AUTH}`;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const signInUsingEmailAPI = async (
  payload: ISignUsingEmailPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<JFWResponse<null>> => {
  const url = `${AUTH_BY_EMAIL}`;

  const response = await post(url, payload, null, userHeaders);

  return response.data;
};
