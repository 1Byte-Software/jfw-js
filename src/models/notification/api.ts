import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { NOTIFICATION_PATH } from './paths';
import {
    IGetNotificationsByUserAuthorizedParams,
    INotification,
    IPushNotificationMessageForTokensParams,
    IPushNotificationResponse,
    IUpdateStatusNotificationParams,
} from './types';
import { NotificationStatus } from './constants';

/**
 * # Delete a notification
 *
 * Deletes tracking notification with id.
 *
 * @param trackingNotificationId - The id of the notification.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/delete-a-notification}
 */
export const deleteNotification = async (
    trackingNotificationId: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.DELETE_NOTIFICATION, {
        trackingNotificationId,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get notifications by the user authorized
 *
 * Get notifications by the user authorized.
 *
 * @param params - The params for assign roles to users.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications-by-the-user-authorized}
 */
export const getNotificationByUserAuthorized = async (
    params?: IGetNotificationsByUserAuthorizedParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.GET_NOTIFICATIONS_BY_USER_AUTHORIZED;
    const response = await jfwAxios.get<
        HttpResponseList<INotification, { unreadCount: number }>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Mark a notification as read
 *
 * Marks the tracking notification as read.
 *
 * @param trackingNotificationId - The id of the notification.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/mark-as-read}
 */
export const markNotificationAsRead = async (
    trackingNotificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.MARK_NOTIFICATION_AS_READ, {
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
 * # Updates all notification
 *
 * Update all status of the tracking notification by user authorized.
 *
 * @param status - The status to update.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-all-notification}
 */
export const updateAllNotification = async (
    status: NotificationStatus,
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
 * # Updates status notifications
 *
 * Updates status of the tracking notification.
 *
 * @param params - The params for updating status notifications.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-status-notifications}
 * #JFW-499
 */
export const updateStatusNotifications = async (
    params: IUpdateStatusNotificationParams,
    config?: AxiosRequestConfig,
) => {
    const url = NOTIFICATION_PATH.UPDATE_STATUS_NOTIFICATIONS;
    const response = await jfwAxios.put<HttpResponse<number>>(url, null, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Updates status of a notification
 *
 * Updates status of the tracking notification.
 *
 * @param trackingNotificationId - The id of the notification.
 * @param status - The status to update.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-status-of-a-notification}
 */
export const updateStatusOfNotification = async (
    trackingNotificationId: IdType,
    status: NotificationStatus,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.UPDATE_STATUS_OF_NOTIFICATION, {
        trackingNotificationId,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(url, null, {
        params: {
            status,
        },
        ...config,
    });
    return response.data;
};
