import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_SMS_PATH } from './paths';
import {
    IAppIntegrationSMS,
    ICreateAppIntegrationSMSParams,
    ITestSendingSMSMessageParams,
    IUpdateAppIntegrationSMSParams,
} from './types';

/**
 * # Create an app integration SMS
 *
 * Creates a new app integration SMS.
 *
 * @param params - The params for creating a new app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/creates-an-app-integration-sms}
 */
export const createAppIntegrationSMS = async (
    params: ICreateAppIntegrationSMSParams,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMS_PATH.CREATE_APP_INTEGRATION_SMS;
    const response = await jfwAxios.post<HttpResponse<IAppIntegrationSMS>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete an app integration SMS
 *
 * Deletes an app integration sms by the given id.
 *
 * @param id - The id of the app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/deletes-an-app-integration-sms}
 */
export const deleteAppIntegrationSMS = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_SMS_PATH.DELETE_APP_INTEGRATION_SMS,
        {
            id,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get an app integration SMS
 *
 * Gets an app integration SMS by the given id.
 *
 * @param id - The id of the app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms}
 */
export const getAppIntegrationSMS = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(APP_INTEGRATION_SMS_PATH.GET_APP_INTEGRATION_SMS, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMS>>(
        url,
        config,
    );

    return response.data;
};

/**
 * #Get apps integration SMS with brand
 *
 * List all app integration SMS.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand}
 */
export const getAppsIntegrationSMSWithBrand = async (
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMS_PATH.GET_APPS_INTEGRATION_SMS_WITH_BRAND;
    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMS[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Test sending an SMS message
 *
 * This endpoint allows you to **send a test SMS message** using the configured SMS integration settings for a specific App Integration.
 *
 * It is useful for verifying that your SMS provider credentials (e.g., API keys, sender ID, etc.) are correctly set up and functioning.
 *
 * Use this to confirm the integration works **before enabling SMS notifications or sending real user messages.**
 *
 * @param appIntegrationId - The id of the app integration.
 * @param params - The params for test sending text message.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message}
 */
export const testSendingSMSMessage = async (
    appIntegrationId: IdType,
    params: ITestSendingSMSMessageParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_SMS_PATH.TEST_SENDING_SMS_MESSAGE,
        {
            appIntegrationId,
        },
    );
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * Updates an app integration SMS by the given id.
 *
 * @param id - The id of the app integration SMS.
 * @param params - The params for updating an app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/update-an-app-integration-sms}
 */
export const updateAppIntegrationSMS = async (
    id: IdType,
    params: IUpdateAppIntegrationSMSParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_SMS_PATH.UPDATE_APP_INTEGRATION_SMS,
        {
            id,
        },
    );
    const response = await jfwAxios.put<HttpResponse<IAppIntegrationSMS>>(
        url,
        params,
        config,
    );

    return response.data;
};
