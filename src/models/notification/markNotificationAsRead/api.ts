import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { NOTIFICATION_PATH } from '../paths';

/**
 * Marks the tracking notification as read.
 *
 * @param trackingNotificationId - The id of the notification.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/mark-as-read}
 */
export const markNotificationAsRead = async (
    trackingNotificationId: string,
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
