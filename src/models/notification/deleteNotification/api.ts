import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { NOTIFICATION_PATH } from '../paths';

/**
 * Deletes tracking notification with id.
 *
 * @param trackingNotificationId - The id of the notification.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/delete-a-notification}
 */
export const deleteNotificationAPI = async (
    trackingNotificationId: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(NOTIFICATION_PATH.DELETE_NOTIFICATION, {
        trackingNotificationId,
    });
    
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};
