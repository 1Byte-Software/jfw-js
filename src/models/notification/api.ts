import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { ICountSuccessResponse, IdType } from '../base';
import { NOTIFICATION_PATH } from './paths';
import {
    ICreateBroadcastParams,
    IGetNotificationsParams,
    INotification,
    IPushNotificationMessageForTokensParams,
    IPushNotificationResponse,
    ITestPushNotificationDataMessageParams,
} from './types';

export class NotificationAPI {
    /**
     * # Create a broadcast
     *
     * Creates a new broadcast.
     * When a broadcast is created, it generates individual notifications for relevant users.
     *
     * @param params - The params for creating a broadcast.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/create-broadcast}
     */
    public async createBroadcast(
        params: ICreateBroadcastParams,
        config?: AxiosRequestConfig,
    ) {
        const url = NOTIFICATION_PATH.CREATE_BROADCAST;
        const response = await jfwAxios.post<HttpResponse<INotification>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Get a notification
     *
     * Get a notification
     *
     * @param params - The params for getting a notification.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/get-a-notification}
     */
    public async getNotification(
        notificationId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(NOTIFICATION_PATH.GET_NOTIFICATION, {
            notificationId,
        });
        const response = await jfwAxios.get<HttpResponse<INotification>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get notifications
     *
     * Get notifications
     *
     * @param params - The params for getting notifications.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/get-notifications}
     */
    public async getNotifications(
        params?: IGetNotificationsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = NOTIFICATION_PATH.GET_NOTIFICATIONS;
        const response = await jfwAxios.get<HttpResponseList<INotification>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Push notification message for tokens
     *
     * Push the notification with the given title and body to the given device tokens.
     *
     * @param params - The params for pushing notification message for tokens.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/push-notification-message-for-device-token}
     */
    public async pushNotificationMessageForTokens(
        params: IPushNotificationMessageForTokensParams,
        config?: AxiosRequestConfig,
    ) {
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
    }

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
    public async pushNotificationDataMessageByTokens(
        deviceTokens: string[],
        data: Object,
        config?: AxiosRequestConfig,
    ) {
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
    }

    /**
     * # Test push notification data message
     *
     * Test with push notification message
     *
     * This is a test method to push a notification message to the given device tokens.
     *
     * @param params - The params for testing push notification data message.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/notifications/test-push-notification-data-message}
     */
    public async testPushNotificationDataMessage(
        params: ITestPushNotificationDataMessageParams,
        config?: AxiosRequestConfig,
    ) {
        const url = NOTIFICATION_PATH.TEST_PUSH_NOTIFICATION_DATA_MESSAGE;

        const response = await jfwAxios.post<
            HttpResponse<ICountSuccessResponse>
        >(url, null, {
            params,
            paramsSerializer: {
                indexes: true, // use brackets with indexes
            },
            ...config,
        });

        return response.data;
    }
}
