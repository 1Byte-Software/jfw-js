import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { AbstractAPI } from '../../base/AbstractAPI';
import { APP_INTEGRATION_SMS_PATH } from './paths';
import {
    IAppIntegrationSMS,
    ICreateAppIntegrationSMSParams,
    ITestSendingSMSMessageParams,
    IUpdateAppIntegrationSMSParams,
} from './types';

export class AppIntegrationSMSAPI extends AbstractAPI {
    /**
     * # Create an app integration SMS
     *
     * Creates a new app integration SMS.
     *
     * @param params - The params for creating a new app integration SMS.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/creates-an-app-integration-sms}
     */
    public async createAppIntegrationSMS(
        params: ICreateAppIntegrationSMSParams,
        config?: AxiosRequestConfig,
    ) {
        const url = APP_INTEGRATION_SMS_PATH.CREATE_APP_INTEGRATION_SMS;
        const response = await this.axios.post<
            HttpResponse<IAppIntegrationSMS>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Delete an app integration SMS
     *
     * Deletes an app integration sms by the given id.
     *
     * @param id - The id of the app integration SMS.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/deletes-an-app-integration-sms}
     */
    public async deleteAppIntegrationSMS(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_SMS_PATH.DELETE_APP_INTEGRATION_SMS,
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
     * # Get an app integration SMS
     *
     * Gets an app integration SMS by the given id.
     *
     * @param id - The id of the app integration SMS.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms}
     */
    public async getAppIntegrationSMS(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(
            APP_INTEGRATION_SMS_PATH.GET_APP_INTEGRATION_SMS,
            {
                id,
            },
        );
        const response = await this.axios.get<HttpResponse<IAppIntegrationSMS>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get apps integration SMS with brand
     *
     * List all app integration SMS.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand}
     */
    public async getAppsIntegrationSMSWithBrand(config?: AxiosRequestConfig) {
        const url =
            APP_INTEGRATION_SMS_PATH.GET_APPS_INTEGRATION_SMS_WITH_BRAND;
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationSMS[]>
        >(url, config);

        return response.data;
    }

    /**
     * # Test sending an SMS message
     *
     * This endpoint allows you to send a test SMS message using the configured SMS integration settings for a specific App Integration.
     *
     * It is useful for verifying that your SMS provider credentials (e.g., API keys, sender ID, etc.) are correctly set up and functioning.
     *
     * Use this to confirm the integration works before enabling SMS notifications or sending real user messages.
     *
     * @param appIntegrationId - The id of the app integration.
     * @param params - The params for test sending text message.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message}
     */
    public async testSendingSMSMessage(
        appIntegrationId: IdType,
        params: ITestSendingSMSMessageParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_SMS_PATH.TEST_SENDING_SMS_MESSAGE,
            {
                appIntegrationId,
            },
        );
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Updates an app integration SMS
     *
     * Updates an app integration SMS by the given id.
     *
     * @param id - The id of the app integration SMS.
     * @param params - The params for updating an app integration SMS.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/update-an-app-integration-sms}
     */
    public async updateAppIntegrationSMS(
        id: IdType,
        params: IUpdateAppIntegrationSMSParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_SMS_PATH.UPDATE_APP_INTEGRATION_SMS,
            {
                id,
            },
        );
        const response = await this.axios.put<HttpResponse<IAppIntegrationSMS>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
