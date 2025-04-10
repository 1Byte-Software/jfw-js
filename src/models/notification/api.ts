import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { NOTIFICATION_PATH } from './paths';
import {
    IGetNotificationsByUserAuthorizedParams,
    INotification,
    IPushNotificationDataMessageByDevicesParams,
    IPushNotificationDataMessageByGivenDeviceCodeParams,
    IPushNotificationDataMessageByTokensParams,
    IPushNotificationMessageForTokensParams,
    IPushNotificationResponse,
    IUpdateStatusNotificationParams,
} from './types';

/**
 * Deletes tracking notification with id.
 *
 * @see {@link }
 */
export const deleteNotificationAPI = async (
    trackingNotificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.DELETE_BY_ID, {
        trackingNotificationId,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get notifications by the user authorized.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications-by-the-user-authorized}
 */
export const getNotificationByUserAuthorizedAPI = async (
    params?: IGetNotificationsByUserAuthorizedParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<INotification>> => {
    const url = NOTIFICATION_PATH.GET_NOTIFICATION_BY_USER_AUTHORIZED;
    const response = await jfwAxios.get<HttpResponseList<INotification>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Marks the tracking notification as read.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/mark-as-read}
 */
export const markNotificationAsReadAPI = async (
    trackingNotificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.MARK_AS_READ, {
        trackingNotificationId,
    });

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );
    return response.data;
};

/**
 * Push the notification with the given title and body to the given device tokens.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-message-for-device-token}
 */
export const pushNotificationMessageForTokensAPI = async (
    params: IPushNotificationMessageForTokensParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.PUSH_NOTIFICATION_MESSAGE_FOR_TOKENS;

    const response = await jfwAxios.post<
        HttpResponse<IPushNotificationResponse>
    >(url, null, { ...params, ...config });

    return response.data;
};

/**
 * Push notification data message by the given device codes
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-messae-by-the-given-device-codes}
 */
export const pushNotificationDataMessageByGivenDeviceCodesAPI = async (
    params: IPushNotificationDataMessageByGivenDeviceCodeParams,
    data: Object,
    config?: AxiosRequestConfig,
) => {
    const url =
        NOTIFICATION_PATH.PUSH_NOTIFICATION_DATA_MESSAGE_BY_GIVEN_DEVICE_CODES;

    const response = await jfwAxios.post<
        HttpResponse<IPushNotificationResponse>
    >(url, data, { ...params, ...config });

    return response.data;
};

/**
 * Push notification with data messages by the given device tokens.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-message-by-tokens}
 */
export const pushNotificationDataMessageByTokensAPI = async (
    params: IPushNotificationDataMessageByTokensParams,
    data: Object,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.PUSH_NOTIFICATION_DATA_MESSAGE_BY_TOKENS;

    const response = await jfwAxios.post<
        HttpResponse<IPushNotificationResponse>
    >(url, data, { ...params, ...config });

    return response.data;
};

/**
 * Push notification with data messages by the given device ids.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-data-message-by-devices}
 */
export const pushNotificationDataMessageByDevicesAPI = async (
    params: IPushNotificationDataMessageByDevicesParams,
    data: Object,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.PUSH_NOTIFICATION_DATA_MESSAGE_BY_DEVICES;

    const response = await jfwAxios.post<
        HttpResponse<IPushNotificationResponse>
    >(url, data, { ...params, ...config });

    return response.data;
};

/**
 * Update all status of the tracking notification by user authorized.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-all-notification}
 */
export const updateAllNotificationAPI = async (
    status: string,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.UPDATE_ALL_NOTIFICATION;
    const response = await jfwAxios.put(url, null, {
        params: {
            status,
        },
        ...config,
    });

    return response.data;
};

/**
 * Updates status of the tracking notification.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-status-notifications}
 */
export const updateStatusNotificationsAPI = async (
    params: IUpdateStatusNotificationParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.UPDATE_STATUS_NOTIFICATIONS;
    const response = await jfwAxios.put(url, null, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Updates status of the tracking notification.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-status-of-a-notification}
 */
export const updateStatusOfNotificationAPI = async (
    trackingNotificationId: IdType,
    status: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.UPDATE_STATUS_OF_NOTIFICATION, {
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
