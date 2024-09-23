import { RawAxiosRequestHeaders } from 'axios';
import { axiosInstanceJfw } from '../config/axios/axiosClient';
import { IById, IListResponse } from '../models/interfaces';
import {
  IGetNotificationRequestParams,
  INotification,
  IPushDataMessageParams,
  IPushDataMessagePayload,
  IUpdateAllNotificationsParams,
  IUpdateNotificationStatusParams,
} from '../models/interfaces/notification';
import { get, put, remove } from '../utils/axiosHelper';

const REST = 'notifications';
const UPDATE_ALL_STATUS = 'update-all-status';
const STATUS = 'update-status';
const PUSH_DATA_MESSAGES = 'push-data-messages/by-token';

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

export const updateNotificationStatusAPI = async (
  path: IById,
  params: IUpdateNotificationStatusParams,
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

export const pushDataMessagesAPI = async (
  params: IPushDataMessageParams,
  payload: IPushDataMessagePayload,
): Promise<boolean> => {
  const url = `${REST}/${PUSH_DATA_MESSAGES}`;

  const response = await axiosInstanceJfw.post(url, payload, {
    params,
  });

  return response.data;
};
