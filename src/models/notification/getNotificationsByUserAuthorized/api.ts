import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { NOTIFICATION_PATH } from '../paths';
import { INotification } from '../types';
import { IGetNotificationsByUserAuthorizedParams } from './types';

/**
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
    const url = NOTIFICATION_PATH.GET_NOTIFICATION_BY_USER_AUTHORIZED;

    const response = await jfwAxios.get<
        HttpResponseList<INotification, { unreadCount: number }>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};
