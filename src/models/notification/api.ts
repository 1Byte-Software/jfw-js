import { RawAxiosRequestHeaders } from 'axios';
import { get, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
import { NOTIFICATION_PATH } from './paths';
import {
    INotification,
    IQueryNotificationParams,
    IUpdateNotificationStatusParams,
} from './types';

/**
 * List all notifications by the user authorized.
 */
export const queryNotificationAPI = async (
    params: IQueryNotificationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<INotification>> => {
    const url = NOTIFICATION_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);
    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * Updates status of the notification
 */
export const updateNotificationStatusAPI = async (
    trackingNotificationId: IdType,
    params: IUpdateNotificationStatusParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(NOTIFICATION_PATH.UPDATE_STATUS, {
        trackingNotificationId,
    });

    const response = await put(
        url,
        null,
        {
            params,
        },
        userHeaders,
    );
    return response.data;
};

/**
 * Deletes tracking notification with id.
 */
export const deleteNotificationAPI = async (
    trackingNotificationId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(NOTIFICATION_PATH.DELETE_BY_ID, {
        trackingNotificationId,
    });

    const response = await remove(url, userHeaders);
    return response.data;
};

/**
 * Updates status of the tracking notification.
 */
export const updateStatusAllNotificationAPI = async (
    status: string,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = NOTIFICATION_PATH.UPDATE_ALL_STATUS;
    const response = await put(
        url,
        {
            params: {
                status,
            },
        },
        null,
        userHeaders,
    );

    return response.data;
};

/**
 * Push notification data messages by the given device codes.
 * @feature Will make in feature
 */
export const pushDataMessageAPI = async () => {
    const url = NOTIFICATION_PATH.PUSH_DATA_MESSAGE;
};
