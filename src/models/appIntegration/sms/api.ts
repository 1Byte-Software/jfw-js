import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_SMS_PATH } from './paths';
import {
    IAppIntegrationSMS,
    ICreateAppIntegrationSMSData,
    ITestSendingSMSMessageData,
    IUpdateAppIntegrationSMSData,
} from './types';

/**
 * Creates a new app integration SMS.
 *
 * @param data - The data for creating a new app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/creates-an-app-integration-sms}
 */
export const createAppIntegrationSMSAPI = async (
    data: ICreateAppIntegrationSMSData,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMS_PATH.CREATE_APP_INTEGRATION_SMS;
    const response = await jfwAxios.post<HttpResponse<IAppIntegrationSMS>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes an app integration sms by the given id.
 *
 * @param id - The id of the app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/deletes-an-app-integration-sms}
 */
export const deleteAppIntegrationSMSAPI = async (
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
 * Gets an app integration SMS by the given id.
 *
 * @param id - The id of the app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms}
 */
export const getAppIntegrationSMSAPI = async (
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
 * List all app integration SMS.
 *
 * @param params - The parameters for getting all app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand}
 */
export const getAppsIntegrationSMSWithBrandAPI = async (
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
 * This endpoint allows you to **send a test SMS message** using the configured SMS integration settings for a specific App Integration.
 *
 * It is useful for verifying that your SMS provider credentials (e.g., API keys, sender ID, etc.) are correctly set up and functioning.
 *
 * Use this to confirm the integration works **before enabling SMS notifications or sending real user messages.**
 *
 * @param appIntegrationId - The id of the app integration.
 * @param data - The data for test sending text message.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message}
 */
export const testSendingSMSMessageAPI = async (
    appIntegrationId: IdType,
    data: ITestSendingSMSMessageData,
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
        data,
        config,
    );

    return response.data;
};

/**
 * Updates an app integration SMS by the given id.
 *
 * @param id - The id of the app integration SMS.
 * @param data - The data for updating an app integration SMS.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/update-an-app-integration-sms}
 */
export const updateAppIntegrationSMSAPI = async (
    id: IdType,
    data: IUpdateAppIntegrationSMSData,
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
        data,
        config,
    );

    return response.data;
};
