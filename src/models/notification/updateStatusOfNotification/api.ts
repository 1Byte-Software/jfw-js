import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { NotificationStatus } from '../constants';
import { NOTIFICATION_PATH } from '../paths';

/**
 * Updates status of the tracking notification.
 *
 * @param trackingNotificationId - The id of the notification.
 * @param status - The status to update.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/updates-status-of-a-notification}
 */
export const updateStatusOfNotification = async (
    trackingNotificationId: string,
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
