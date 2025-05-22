import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_PUSH_NOTIFICATION_PATH } from './paths';
import {
    IAppIntegrationPushNotification,
    ICreateAppIntegrationPushNotificationData,
    IUpdateAppIntegrationPushNotificationData,
} from './types';

/**
 * Create a new app integration push notification.
 *
 * @param data - The data for creating a new app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification}
 */
export const createAppIntegrationPushNotificationAPI = async (
    data: ICreateAppIntegrationPushNotificationData,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PUSH_NOTIFICATION_PATH.CREATE_APP_INTEGRATION_PUSH_NOTIFICATION;
    const response = await jfwAxios.post<
        HttpResponse<IAppIntegrationPushNotification>
    >(url, data, config);

    return response.data;
};

/**
 * Delete an app integration push notification by the given id.
 *
 * @param id - The id of the app integration push notification.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/delete-an-app-integration-push-notification}
 */
export const deleteAppIntegrationPushNotificationAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PUSH_NOTIFICATION_PATH.DELETE_APP_INTEGRATION_PUSH_NOTIFICATION,
        {
            id,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get an app integration push notification by the given id.
 *
 * @param id - The id of the app integration push notification.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-an-app-integration-push-notification}
 */
export const getAppIntegrationPushNotificationAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PUSH_NOTIFICATION_PATH.GET_APP_INTEGRATION_PUSH_NOTIFICATION,
        {
            id,
        },
    );

    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPushNotification>
    >(url, config);

    return response.data;
};

/**
 * Get the current brand's app integration push notification.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-app-integration-push-notification-with-brand}
 */
export const getAppIntegrationPushNotificationsWithBrandAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PUSH_NOTIFICATION_PATH.GET_APP_INTEGRATION_PUSH_NOTIFICATIONS_WITH_BRAND;

    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPushNotification[]>
    >(url, config);

    return response.data;
};

/**
 * Update an app integration push notification by the given id.
 *
 * @param id - The id of the app integration push notification.
 * @param data - The data for updating an app integration push notification.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/update-an-app-integration-push-notification}
 */
export const updateAppIntegrationPushNotificationAPI = async (
    id: IdType,
    data: IUpdateAppIntegrationPushNotificationData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PUSH_NOTIFICATION_PATH.UPDATE_APP_INTEGRATION_PUSH_NOTIFICATION,
        {
            id,
        },
    );
    const response = await jfwAxios.put<
        HttpResponse<IAppIntegrationPushNotification>
    >(url, data, config);

    return response.data;
};
