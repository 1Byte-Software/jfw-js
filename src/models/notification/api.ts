import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { NOTIFICATION_PATH } from './paths';
import { INotification, IQueryNotificationParams } from './types';

/**
 * List all notifications by the user authorized.
 */
export const queryNotificationAPI = async (
    params: IQueryNotificationParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<INotification>> => {
    const url = NOTIFICATION_PATH.QUERY;
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};

/**
 * Updates status of the notification
 */
export const updateNotificationStatusAPI = async (
    trackingNotificationId: IdType,
    status: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.UPDATE_STATUS, {
        trackingNotificationId,
    });

    const response = await jfwAxios.put(url, null, {
        ...config,
        params: {
            status,
        },
    });
    return response.data;
};

/**
 * Deletes tracking notification with id.
 */
export const deleteNotificationAPI = async (
    trackingNotificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.DELETE_BY_ID, {
        trackingNotificationId,
    });

    const response = await jfwAxios.delete(url, config);
    return response.data;
};

/**
 * Updates status of the tracking notification.
 */
export const updateStatusAllNotificationAPI = async (
    status: string,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.UPDATE_ALL_STATUS;
    const response = await jfwAxios.put(
        url,
        {
            params: {
                status,
            },
        },
        config,
    );

    return response.data;
};

/**
 * Push notification data messages by the given device codes.
 * @feature Will make in feature
 */
export const pushDataMessageAPI = async () => {
    const url = NOTIFICATION_PATH.PUSH_DATA_MESSAGE;
};
