import { axiosInstanceJfw } from '../config/axios/axiosClient';
import { IPushNotificationSettings } from '../models/interfaces';

const REST = 'integrations';
const PUSH_NOTIFICATION_URL = `${REST}/push-notification`;

export const getPushNotificationsAPI =
  async (): Promise<IPushNotificationSettings> => {
    const response = await axiosInstanceJfw.get(PUSH_NOTIFICATION_URL);

    return response.data;
  };
