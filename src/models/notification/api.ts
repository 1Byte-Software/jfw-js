import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { NOTIFICATION_PATH } from './paths';
import {
    ICreateNotificationParams,
    IGetNotificationsParams,
    INotification,
    IPushNotificationMessageForTokensParams,
    IPushNotificationResponse,
} from './types';
import { IdType } from '../base';
import { generatePath } from '../../utils/path';

/**
 * # Push notification message for tokens
 *
 * Push the notification with the given title and body to the given device tokens.
 *
 * @param params - The params for pushing notification message for tokens.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-message-for-device-token}
 */
export const pushNotificationMessageForTokens = async (
    params: IPushNotificationMessageForTokensParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS;
    const response = await jfwAxios.post<
        HttpResponse<IPushNotificationResponse>
    >(url, null, {
        params,
        paramsSerializer: {
            indexes: true, // use brackets with indexes
        },
        ...config,
    });

    return response.data;
};

/**
 * # Push notification data message by tokens
 *
 * Push notification with data messages by the given device tokens.
 *
 * @param deviceTokens - The list of device tokens.
 * @param data - The data for pushing notification data message by tokens.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-message-by-tokens}
 */
export const pushNotificationDataMessageByTokens = async (
    deviceTokens: string[],
    data: Object,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS;

    const response = await jfwAxios.post<
        HttpResponse<IPushNotificationResponse>
    >(url, data, {
        params: {
            deviceTokens,
        },
        paramsSerializer: {
            indexes: true, // use brackets with indexes
        },
        ...config,
    });

    return response.data;
};

/**
 * #NOTE: Update tsdoc in future.
 */
export const getNotifications = async (
    params?: IGetNotificationsParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.GET_NOTIFICATIONS;
    const response = await jfwAxios.get<HttpResponseList<INotification>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * #NOTE: Update tsdoc in future.
 */
export const getNotification = async (
    notificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.GET_NOTIFICATION, {
        notificationId,
    });
    const response = await jfwAxios.get<HttpResponse<INotification>>(
        url,
        config,
    );

    return response.data;
};

export const createNotification = async (
    params: ICreateNotificationParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.CREATE_NOTIFICATION;
    const response = await jfwAxios.post<HttpResponse<INotification>>(
        url,
        params,
        config,
    );

    return response.data;
};
