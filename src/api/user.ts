import { RawAxiosRequestHeaders } from 'axios';
import {
  IApplyCodeParams,
  IById,
  IChangePasswordPayload,
  ICheckCodePath,
  IEditProfilePayload,
  IEditUserTypePath,
  IForgotPasswordPayload,
  IGetListUsersParams,
  IGetUserInfoByUsernamePath,
  IListResponse,
  IPaginationParams,
  IReferee,
  IResetPasswordPayload,
  ISignUpPayload,
  IStatistic,
  IStatisticCommonParams,
  IUser,
} from '../models/interfaces';
import {
  IConfiguration,
  ICreateConfigurationPayload,
  IGetUserConfigurationParams,
} from '../models/interfaces/configuration';
import { get, patch, post, put, remove } from '../utils/axiosHelper';

const REST = 'users';
const REST_V1 = 'v1/users';
const ME = `${REST_V1}/me`;
const REGISTER = `${REST}/register`;
const FORGOT_PASSWORD = `${REST}/forgot-password`;
const RESET_PASSWORD = `${REST}/reset-password`;
const CHANGE_PASSWORD = 'change-password';

const APPLY = 'apply';
const CHECK = 'check';
const CONFIGURATION = 'configurations';
const REFEREE = 'referees';
const REFERRAL = 'referrals';
const ROLES = 'roles';
const STATISTIC = 'statistics';
const TYPE = 'type';
const BY_USERNAME = 'by-username';

export const getListUsersAPI = async (
  params: IGetListUsersParams,
): Promise<IListResponse<IUser>> => {
  const url = `${REST_V1}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getUserInfoAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser> => {
  const url = `${ME}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListUsersByIdsAPI = async (
  path: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IUser[]> => {
  const url = `${REST}?${path}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getUserInfoByUsernameAPI = async (
  path: IGetUserInfoByUsernamePath,
): Promise<IUser> => {
  const { username } = path;
  const url = `${REST}/${BY_USERNAME}/${username}`;

  const response = await get(url, null);

  return response.data;
};

export const getUserInfoByIdAPI = async (
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

export const deleteUserAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  const response = await remove(url);

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
  params: IGetUserConfigurationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IConfiguration[]> => {
  const { id } = path;
  const url = `${REST}/${id}/${CONFIGURATION}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const createUserConfigurationsAPI = async (
  path: IById,
  payload: ICreateConfigurationPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${CONFIGURATION}`;

  return await post(url, payload, null, userHeaders);
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

export const userStatisticAPI = async (
  params: IStatisticCommonParams,
): Promise<IStatistic[]> => {
  const url = `${REST}/${STATISTIC}`;
  const response = await get(url, {
    params,
  });

  return response.data;
};

export const editUserTypeAPI = async (path: IEditUserTypePath) => {
  const { type, userCode } = path;
  const url = `${REST_V1}/${userCode}/${TYPE}/${type}`;
  const response = await put(url);
  return response.data;
};

export const assignRolesToUserAPI = async (path: IById, params: string) => {
  const { id } = path;
  const url = `${REST_V1}/${id}/${ROLES}?${params}`;

  const response = await patch(url);

  return response.data;
};

export const deleteRolesFromUserAPI = async (path: IById, params: string) => {
  const { id } = path;
  const url = `${REST_V1}/${id}/${ROLES}?${params}`;
  const response = await remove(url);

  return response.data;
};
