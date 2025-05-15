import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_SMTP_PATH } from './paths';
import {
    IAppIntegrationSMTP,
    ICreateAppIntegrationSMTPData,
    IGetAppIntegrationSMTPsParams,
    ITestSendingEmailAddressData,
    IUpdateAppIntegrationSMTPData,
} from './types';

/**
 * Creates a new app integration SMTP.
 *
 * @param data - The data for creating a new app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/creates-an-app-integration-smtp}
 */
export const createAppIntegrationSMTPAPI = async (
    data: ICreateAppIntegrationSMTPData,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.CREATE_APP_INTEGRATION_SMTP;
    const response = await jfwAxios.post<HttpResponse<IAppIntegrationSMTP>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes the app integration SMTP by the given id.
 *
 * @param id - The id of the app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/deletes-an-app-integration-smtp}
 */
export const deleteAppIntegrationSMTPAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_SMTP_PATH.DELETE_APP_INTEGRATION_SMTP,
        {
            id,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets the app integration SMTP by the given id.
 *
 * @param id - The id of the app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp}
 */
export const getAppIntegrationSMTPAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_SMTP_PATH.GET_APP_INTEGRATION_SMTP,
        {
            id,
        },
    );
    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMTP>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Get apps integration SMTP.
 *
 * @param params - The parameters for getting apps integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp-with-brand}
 */
export const getAppsIntegrationSMTPWithBrandAPI = async (
    params?: IGetAppIntegrationSMTPsParams,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.GET_APPS_INTEGRATION_SMTP_WITH_BRAND;
    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMTP[]>>(
        url,
        {
            params,
            ...config,
        },
    );

    return response.data;
};

/**
 * This endpoint allows you to **send a test email** using the configured SMTP integration settings.
 * It is used to verify that the provided SMTP credentials (such as host, port, username, and password) are working correctly and can be used to send emails.
 *
 * Use this endpoint to ensure that your SMTP integration is properly set up **before enabling real transactional or notification emails** in your application.
 *
 * @param data - The data for test sending email address.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message}
 */
export const testSendingEmailAddressAPI = async (
    data: ITestSendingEmailAddressData,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.TEST_SENDING_EMAIL_ADDRESS_MESSAGE;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Updates the app integration SMTP by the given id.
 *
 * @param id - The id of the app integration SMTP.
 * @param data - The data for updating an app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/update-an-app-integration-smtp}
 */
export const updateAppIntegrationSMTPAPI = async (
    id: IdType,
    data: IUpdateAppIntegrationSMTPData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_SMTP_PATH.UPDATE_APP_INTEGRATION_SMTP,
        {
            id,
        },
    );
    const response = await jfwAxios.put<HttpResponse<IAppIntegrationSMTP>>(
        url,
        data,
        config,
    );

    return response.data;
};
