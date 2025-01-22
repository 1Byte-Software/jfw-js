import { RawAxiosRequestHeaders } from 'axios';
import { IdType } from '../models';
import {
  IAddOrganizationPayload,
  IById,
  IGetListOrganizationsByViewerParams,
  IGetListOrganizationsParams,
  IGetListUsersOfOrganizationParams,
  IListResponse,
  IOrganization,
  IOrganizationUser,
  IResponse,
  IResponseNotPermission,
  IUpdateOrganizationUserParams,
  IUpdateOrganizationUserPath,
} from '../models/interfaces';
import { get, patch, post, put, remove } from '../utils/axiosHelper';

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

export const getOrganizationByIdAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IOrganization> => {
  const url = `${REST}/${id}`;
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
  params?: IGetListOrganizationsByViewerParams,
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
  id: IdType,
  params?: IGetListUsersOfOrganizationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IOrganizationUser>> => {
  const url = `${REST}/${id}/${USER}`;
  const response = await get(url, { params }, userHeaders);

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const addOrganizationAPI = async (payload: IAddOrganizationPayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editOrganizationAPI = async (
  id: IdType,
  payload: IAddOrganizationPayload,
) => {
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const deleteOrganizationAPI = async (id: IdType) => {
  const url = `${REST}/${id}`;

  const response = await remove(url);

  return response.data;
};
