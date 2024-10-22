import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddSMTPPayload,
  IById,
  IGetListSmtpParams,
  IListResponse,
  IPushNotificationSettings,
  ISmtp,
} from '../models/interfaces';
import { get, post, put } from '../utils/axiosHelper';

const REST = 'integrations';
const PUSH_NOTIFICATION_URL = `${REST}/push-notification`;

const REST_SMTP = `${REST}/smtp`;

export const getPushNotificationsAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IPushNotificationSettings> => {
  const response = await get(PUSH_NOTIFICATION_URL, null, userHeaders);

  return response.data;
};

// SMTP

export const getListSmtpAPI = async (
  params?: IGetListSmtpParams,
): Promise<IListResponse<ISmtp>> => {
  const url = `${REST_SMTP}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getSmtpDetails = async (path: IById): Promise<ISmtp> => {
  const { id } = path;
  const url = `${REST_SMTP}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addSmtpAPI = async (payload: IAddSMTPPayload) => {
  const url = `${REST_SMTP}`;
  const response = await post(url, payload);

  return response.data;
};

export const editSmtpAPI = async (path: IById, payload: IAddSMTPPayload) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};
