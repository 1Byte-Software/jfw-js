import {
  IAddExternalPayload,
  IById,
  IExternal,
  IGetListExternalParams,
  IListResponse,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST_EXTERNAL = 'external-auth-providers';

export const getListExternalsAPI = async (
  params?: IGetListExternalParams,
): Promise<IListResponse<IExternal>> => {
  const url = `${REST_EXTERNAL}`;
  const response = await get(url, {
    params,
  });
  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getExternalDetailsAPI = async (
  path: IById,
): Promise<IExternal> => {
  const { id } = path;
  const url = `${REST_EXTERNAL}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addExternalAPI = async (payload: IAddExternalPayload) => {
  const url = `${REST_EXTERNAL}`;

  const response = await post(url, payload);

  return response.data;
};

export const editExternalAPI = async (
  path: IById,
  payload: IAddExternalPayload,
) => {
  const { id } = path;
  const url = `${REST_EXTERNAL}/${id}`;

  const response = await put(url, payload);

  return response.data;
};

export const deleteExternalAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST_EXTERNAL}/${id}`;

  return await remove(url);
};
