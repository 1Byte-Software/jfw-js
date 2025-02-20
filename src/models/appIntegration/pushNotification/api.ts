import { RawAxiosRequestHeaders } from 'axios';
import { get, post, put, remove } from '../../../utils/axiosHelper';
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
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IIntegrationPushNotification> => {
    const url = INTEGRATION_PUSH_NOTIFICATION_PATH.GET;

    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Gets a app integration push notification by the given id.
 */
export const getIntegrationPushNotificationByIdAPI = async (
    appIntegrationPushNotificationId: IdType,
): Promise<IIntegrationPushNotification> => {
    const url = generatePath(INTEGRATION_PUSH_NOTIFICATION_PATH.GET_BY_ID, {
        id: appIntegrationPushNotificationId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Creates a new app integration push notification.
 */
export const createIntegrationPushNotificationAPI = async (
    params: ICreateIntegrationPushNotificationParams,
) => {
    const url = INTEGRATION_PUSH_NOTIFICATION_PATH.CREATE;
    const response = await post(url, params);

    return response.data;
};

/**
 * Updates the app integration push notification by the given id.
 */
export const updateIntegrationPushNotificationByIdAPI = async (
    appIntegrationPushNotificationId: IdType,
    payload: IUpdateIntegrationPushNotificationParams,
) => {
    const url = generatePath(INTEGRATION_PUSH_NOTIFICATION_PATH.UPDATE_BY_ID, {
        id: appIntegrationPushNotificationId,
    });
    const response = await put(url, payload);

    return response.data;
};

/**
 * Deletes the app integration push notification by the given id.
 */
export const deleteIntegrationPushNotificationAPI = async (
    appIntegrationPushNotificationId: IdType,
) => {
    const url = generatePath(INTEGRATION_PUSH_NOTIFICATION_PATH.DELETE_BY_ID, {
        id: appIntegrationPushNotificationId,
    });
    const response = await remove(url);

    return response.data;
};
