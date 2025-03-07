import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { INTEGRATION_PUSH_NOTIFICATION_PATH } from './paths';
import {
    ICreateIntegrationPushNotificationParams,
    IIntegrationPushNotification,
    IUpdateIntegrationPushNotificationParams,
} from './types';

/**
 * Gets app integration push notification by the current brand.
 */
export const getIntegrationPushNotificationAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url = INTEGRATION_PUSH_NOTIFICATION_PATH.GET;

    const response = await jfwAxios.get<
        HttpResponse<IIntegrationPushNotification>
    >(url, config);

    return response.data;
};

/**
 * Gets a app integration push notification by the given id.
 */
export const getIntegrationPushNotificationByIdAPI = async (
    appIntegrationPushNotificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INTEGRATION_PUSH_NOTIFICATION_PATH.GET_BY_ID, {
        id: appIntegrationPushNotificationId,
    });
    const response = await jfwAxios.get<
        HttpResponse<IIntegrationPushNotification>
    >(url, config);

    return response.data;
};

/**
 * Creates a new app integration push notification.
 */
export const createIntegrationPushNotificationAPI = async (
    data: ICreateIntegrationPushNotificationParams,
    config?: AxiosRequestConfig,
) => {
    const url = INTEGRATION_PUSH_NOTIFICATION_PATH.CREATE;
    const response = await jfwAxios.post(url, data, config);

    return response.data;
};

/**
 * Updates the app integration push notification by the given id.
 */
export const updateIntegrationPushNotificationByIdAPI = async (
    appIntegrationPushNotificationId: IdType,
    data: IUpdateIntegrationPushNotificationParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INTEGRATION_PUSH_NOTIFICATION_PATH.UPDATE_BY_ID, {
        id: appIntegrationPushNotificationId,
    });
    const response = await jfwAxios.put(url, data, config);

    return response.data;
};

/**
 * Deletes the app integration push notification by the given id.
 */
export const deleteIntegrationPushNotificationAPI = async (
    appIntegrationPushNotificationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INTEGRATION_PUSH_NOTIFICATION_PATH.DELETE_BY_ID, {
        id: appIntegrationPushNotificationId,
    });
    const response = await jfwAxios.delete(url, config);

    return response.data;
};
