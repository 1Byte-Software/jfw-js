import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_PUSH_NOTIFICATION_PATH } from './paths';
import {
    IAppIntegrationPushNotification,
    ICreateAppIntegrationPushNotificationParams,
    ICreateAppIntegrationPushNotificationWithImportFileSettingsParams,
    IUpdateAppIntegrationPushNotificationParams,
} from './types';
import { AbstractAPI } from '../../base/AbstractAPI';

export class AppIntegrationPushNotificationAPI extends AbstractAPI extends AbstractAPI {
    /**
     * # Create an app integration push notification
     *
     * Create a new app integration push notification.
     *
     * @param params - The params for creating a new app integration push notification.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification}
     */
    public async createAppIntegrationPushNotification(
        params: ICreateAppIntegrationPushNotificationParams,
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_PUSH_NOTIFICATION_PATH.CREATE_APP_INTEGRATION_PUSH_NOTIFICATION;
        const response = await this.axios.post<
            HttpResponse<IAppIntegrationPushNotification>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Creates an app integration push notification with import file settings
     *
     * Create a new app integration push notification from file settings.
     *
     * @param params - The params for creating a new app integration push notification from file settings.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/create-an-app-integration-push-notification-by-import-file}
     */
    public async createAppIntegrationPushNotificationWithImportFileSettings(
        params: ICreateAppIntegrationPushNotificationWithImportFileSettingsParams,
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_PUSH_NOTIFICATION_PATH.CREATE_APP_INTEGRATION_PUSH_NOTIFICATION_WITH_IMPORT_FILE_SETTINGS;
        const response = await this.axios.post<
            HttpResponse<IAppIntegrationPushNotification>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Delete an app integration push notification
     *
     * Delete an app integration push notification by the given id.
     *
     * @param id - The id of the app integration push notification.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/delete-an-app-integration-push-notification}
     */
    public async deleteAppIntegrationPushNotification(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_PUSH_NOTIFICATION_PATH.DELETE_APP_INTEGRATION_PUSH_NOTIFICATION,
            {
                id,
            },
        );
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get an app integration push notification
     *
     * Get an app integration push notification by the given id.
     *
     * @param id - The id of the app integration push notification.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-an-app-integration-push-notification}
     */
    public async getAppIntegrationPushNotification(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_PUSH_NOTIFICATION_PATH.GET_APP_INTEGRATION_PUSH_NOTIFICATION,
            {
                id,
            },
        );
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationPushNotification>
        >(url, config);

        return response.data;
    }

    /**
     * # Get an app integration push notification with brand
     *
     * Get the current brand's app integration push notification.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/get-app-integration-push-notification-with-brand}
     */
    public async getAppIntegrationPushNotificationsWithBrand(
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_PUSH_NOTIFICATION_PATH.GET_APP_INTEGRATION_PUSH_NOTIFICATIONS_WITH_BRAND;
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationPushNotification[]>
        >(url, config);

        return response.data;
    }

    /**
     * # Update an app integration push notification
     *
     * Update an app integration push notification by the given id.
     *
     * @param id - The id of the app integration push notification.
     * @param params - The params for updating an app integration push notification.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/push-notification/update-an-app-integration-push-notification}
     */
    public async updateAppIntegrationPushNotification(
        id: IdType,
        params: IUpdateAppIntegrationPushNotificationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_PUSH_NOTIFICATION_PATH.UPDATE_APP_INTEGRATION_PUSH_NOTIFICATION,
            {
                id,
            },
        );
        const response = await this.axios.put<
            HttpResponse<IAppIntegrationPushNotification>
        >(url, params, config);

        return response.data;
    }
}
