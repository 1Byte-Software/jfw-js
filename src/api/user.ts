import { RawAxiosRequestHeaders } from 'axios';
import {
  IApplyCodeParams,
  IById,
  IChangePasswordPayload,
  ICheckCodePath,
  IEditProfilePayload,
  IForgotPasswordPayload,
  IPaginationParams,
  IReferee,
  IResetPasswordPayload,
  ISignUpPayload,
  IUser,
} from '../models/interfaces';
import {
  IConfiguration,
  IConfigurationPayload,
  IGetConfigurationParams,
  IUpdateUserConfigurationPath,
} from '../models/interfaces/configuration';
import { get, post, put } from '../utils/axiosHelper';

const REST = 'users';
const REGISTER = `${REST}/register`;
const FORGOT_PASSWORD = `${REST}/forgot-password`;
const RESET_PASSWORD = `${REST}/reset-password`;
const CHANGE_PASSWORD = 'change-password';

const APPLY = 'apply';
const CHECK = 'check';
const CONFIGURATION = 'configurations';
const ME = `v1/${REST}/me`;
const REFEREE = 'referees';
const REFERRAL = 'referrals';

export const getUserInfoAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser> => {
  const url = `${ME}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getUserinfoByIdsAPI = async (
  path: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser[]> => {
  const url = `${REST}?${path}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getUserinfoByIdAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const updateUserAPI = async (
  path: IById,
  payload: IEditProfilePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const changePasswordAPI = async (
  payload: IChangePasswordPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${CHANGE_PASSWORD}`;

  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const getListUserConfigurationsAPI = async (
  path: IById,
  params: IGetConfigurationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IConfiguration[]> => {
  const { id } = path;
  const url = `${REST}/${id}/${CONFIGURATION}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const createUserConfigurationsAPI = async (
  path: IById,
  payload: IConfigurationPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${CONFIGURATION}`;

  return await post(url, payload, null, userHeaders);
};

export const updateUserConfigurationsAPI = async (
  path: IUpdateUserConfigurationPath,
  payload: IConfigurationPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { configurationId } = path;
  const url = `${CONFIGURATION}/${configurationId}`;

  return await put(url, payload, null, userHeaders);
};

export const getRefereesAPI = async (
  path: IById,
  params: IPaginationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IReferee[]> => {
  const { id } = path;
  const url = `${REST}/${id}/${REFEREE}`;

  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const checkCodeValidAPI = async (
  path: ICheckCodePath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { code } = path;
  const url = `${REST}/${REFERRAL}/${code}/${CHECK}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const applyCodeAPI = async (
  path: IById,
  params: IApplyCodeParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `v1/${REST}/${id}/${REFERRAL}/${APPLY}`;

  return await post(
    url,
    null,
    {
      params,
    },
    userHeaders,
  );
};

export const signUpAPI = async (
  payload: ISignUpPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REGISTER}`;
  const response = await post(url, payload, null, userHeaders);
  return response.data;
};

export const forgotPasswordAPI = async (
  payload: IForgotPasswordPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${FORGOT_PASSWORD}`;
  const response = await post(url, payload, null, userHeaders);
  return response.data;
};

export const resetPasswordAPI = async (
  payload: IResetPasswordPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${RESET_PASSWORD}`;
  const response = await post(url, payload, null, userHeaders);
  return response.data;
};
