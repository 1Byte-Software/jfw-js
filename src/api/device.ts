import { RawAxiosRequestHeaders } from 'axios';
import {
  IById,
  ICheckUserAccessParams,
  IDevice,
  IGetListDevicesParams,
  IListResponse,
  IResponse,
  IStatistic,
  IStatisticCommonParams,
} from '../models/interfaces';
import { get, remove } from '../utils/axiosHelper';

const REST = 'devices';
const USER_ACCESS = 'check-user-access';
const STATISTIC = 'statistics';

export const getListDevicesAPI = async (
  params: IGetListDevicesParams,
): Promise<IListResponse<IDevice>> => {
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

export const getDeviceByIdAPI = async (path: IById): Promise<IDevice> => {
  const { id } = path;
  const url = `${REST}/${id}`;

  const response = await get(url);

  return response.data;
};

export const deleteDeviceAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  return await remove(url);
};

export const deviceStatisticAPI = async (
  params: IStatisticCommonParams,
): Promise<IStatistic[]> => {
  const url = `${REST}/${STATISTIC}`;
  const response = await get(url, {
    params,
  });

  return response.data;
};

export const checkUserAccessAPI = async (
  params: ICheckUserAccessParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<boolean>> => {
  const url = `v1/${REST}/${USER_ACCESS}`;
  const response = await get(url, { params }, userHeaders);

  return response;
};
