import { RawAxiosRequestHeaders } from 'axios';
import { IById, IListResponse } from '../models/interfaces';
import {
  IGetNotificationRequestParams,
  INotification,
  IUpdateAllNotificationsParams,
  IUpdateNotificationRequestParams,
} from '../models/interfaces/notification';
import { get, put, remove } from '../utils/axiosHelper';

const REST = 'notifications';
const UPDATE_ALL_STATUS = 'update-all-status';
const STATUS = 'update-status';

export const getNotificationsAPI = async (
  params: IGetNotificationRequestParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<INotification>> => {
  const url = REST;
  const response = await get(url, { params }, userHeaders);
  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const updateNotificationsAPI = async (
  path: IById,
  params: IUpdateNotificationRequestParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${STATUS}`;
  const response = await put(
    url,
    null,
    {
      params,
    },
    userHeaders,
  );
  return response.data;
};

export const deleteNotificationsAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url, userHeaders);
  return response.data;
};

export const updateAllNotificationsAPI = async (
  params: IUpdateAllNotificationsParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${UPDATE_ALL_STATUS}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};
