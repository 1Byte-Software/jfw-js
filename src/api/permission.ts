import {
  IAddPermissionPayload,
  IById,
  IGetListPermissionsParams,
  IListResponse,
  IPermission,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'permissions';

export const getListPermissionsAPI = async (
  params?: IGetListPermissionsParams,
): Promise<IListResponse<IPermission>> => {
  const url = `${REST}`;

  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getPermissionDetailsAPI = async (
  path: IById,
): Promise<IPermission> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addPermissionAPI = async (payload: IAddPermissionPayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editPermissionAPI = async (
  path: IById,
  payload: IAddPermissionPayload,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const deletePermissionAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url);

  return response.data;
};
