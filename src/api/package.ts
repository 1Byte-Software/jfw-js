import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddFeaturesToPackagePayload,
  IAddPackagePayload,
  IById,
  IGetListPackagesParams,
  IPackage,
} from '../models/interfaces';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'packages';

export const getListPackagesAPI = async (
  params?: IGetListPackagesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IPackage[]> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);
  return response.data;
};

export const getPackageByIdAPI = async (path: IById): Promise<IPackage> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addPackageAPI = async (payload: IAddPackagePayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editPackageAPI = async (
  path: IById,
  payload: IAddPackagePayload,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const deletePackageAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url);

  return response.data;
};

export const addFeaturesToPackageAPI = async (
  path: IById,
  payload: IAddFeaturesToPackagePayload[],
) => {
  const { id } = path;
  const url = `${REST}/${id}/features`;
  const response = await post(url, payload);

  return response.data;
};

export const deleteFeaturesFromPackageAPI = async (
  path: IById,
  params: string,
) => {
  const { id } = path;
  const url = `${REST}/${id}/features?${params}`;
  const response = await remove(url);

  return response.data;
};
