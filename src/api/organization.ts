import { RawAxiosRequestHeaders } from 'axios';
import {
  IById,
  IGetListOrganizationsByViewerParams,
  IGetListOrganizationsParams,
  IGetListUsersOfOrganizationParams,
  IGetOrganizationDetailPath,
  IListResponse,
  IOrganization,
  IOrganizationUser,
  IResponse,
  IResponseNotPermission,
  IUpdateOrganizationUserParams,
  IUpdateOrganizationUserPath,
} from '../models/interfaces';
import { get, patch, post, remove } from '../utils/axiosHelper';

const REST = 'organizations';
const UPLOAD = 'upload-file';
const USER = 'users';

export const getListOrganizationsAPI = async (
  params: IGetListOrganizationsParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IOrganization>> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getOrganizationDetailAPI = async (
  path: IGetOrganizationDetailPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IOrganization> => {
  const { identify } = path;
  const url = `${REST}/${identify}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const uploadFileAPI = async (
  path: IById,
  payload: FormData,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${UPLOAD}`;

  return post(
    url,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
    userHeaders,
  );
};

export const getListOrganizationsByViewerAPI = async (
  params: IGetListOrganizationsByViewerParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IOrganization>> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const createOrganizationUserAPI = async (
  path: IUpdateOrganizationUserPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<IOrganizationUser>> => {
  const { userId, organizationId } = path;
  const url = `${REST}/${organizationId}/${USER}/${userId}`;

  return post(url, null, null, userHeaders);
};

export const updateOrganizationUserAPI = async (
  path: IUpdateOrganizationUserPath,
  params: IUpdateOrganizationUserParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<IOrganizationUser> | IResponseNotPermission> => {
  const { userId, organizationId } = path;
  const url = `${REST}/${organizationId}/${USER}/${userId}`;

  return patch(url, null, { params }, userHeaders);
};

export const deleteOrganizationUserAPI = async (
  path: IUpdateOrganizationUserPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { userId, organizationId } = path;
  const url = `${REST}/${organizationId}/${USER}/${userId}`;

  return remove(url, userHeaders);
};

export const getListUsersOfOrganizationAPI = async (
  path: IById,
  params: IGetListUsersOfOrganizationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IOrganizationUser>> => {
  const { id } = path;
  const url = `${REST}/${id}/${USER}`;
  const response = await get(url, { params }, userHeaders);

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};
