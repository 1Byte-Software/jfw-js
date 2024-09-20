import { RawAxiosRequestHeaders } from 'axios';
import { IPushNotificationSettings } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'integrations';
const PUSH_NOTIFICATION_URL = `${REST}/push-notification`;

export const getPushNotificationsAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IPushNotificationSettings> => {
  const response = await get(PUSH_NOTIFICATION_URL, null, userHeaders);

  return response.data;
};
