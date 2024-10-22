import { RawAxiosRequestHeaders } from 'axios';
import {
  IById,
  IConfiguration,
  ICreateConfigurationPayload,
  IGetListConfigurationsPrams,
  IUpdateConfigurationPath,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'configurations';

export const createConfigurationAPI = async (
  payload: ICreateConfigurationPayload,
) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const getListConfigurationsAPI = async (
  params: IGetListConfigurationsPrams,
): Promise<IConfiguration[]> => {
  const url = `${REST}`;

  const response = await get(url, {
    params,
  });

  return response.data;
};

export const updateConfigurationsAPI = async (
  path: IUpdateConfigurationPath,
  payload: ICreateConfigurationPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { configurationId } = path;
  const url = `${REST}/${configurationId}`;

  return await put(url, payload, null, userHeaders);
};

export const deleteConfigurationAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  const response = await remove(url);

  return response.data;
};
