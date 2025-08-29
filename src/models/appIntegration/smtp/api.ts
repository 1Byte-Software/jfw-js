import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_SMTP_PATH } from './paths';
import {
    IAppIntegrationSMTP,
    ICreateAppIntegrationSMTPParams,
    ITestSendingEmailAddressParams,
    IUpdateAppIntegrationSMTPParams,
} from './types';

/**
 * # Create an app integration SMTP
 *
 * Creates a new app integration SMTP.
 *
 * @param params - The params for creating a new app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/creates-an-app-integration-smtp}
 */
export const createAppIntegrationSMTP = async (
    params: ICreateAppIntegrationSMTPParams,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.CREATE_APP_INTEGRATION_SMTP;
    const response = await jfwAxios.post<HttpResponse<IAppIntegrationSMTP>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete an app integration SMTP
 *
 * Deletes the app integration SMTP by the given id.
 *
 * @param id - The id of the app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/deletes-an-app-integration-smtp}
 */
export const deleteAppIntegrationSMTP = async (
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
 * # Get an app integration SMTP
 *
 * Gets the app integration SMTP by the given id.
 *
 * @param id - The id of the app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp}
 */
export const getAppIntegrationSMTP = async (
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
 * # Get apps integration SMTP with brand
 *
 * Get apps integration SMTP.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp-with-brand}
 */
export const getAppsIntegrationSMTPWithBrand = async (
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.GET_APPS_INTEGRATION_SMTP_WITH_BRAND;
    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMTP[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Test sending an email message
 *
 * This endpoint allows you to **send a test email** using the configured SMTP integration settings.
 * It is used to verify that the provided SMTP credentials (such as host, port, username, and password) are working correctly and can be used to send emails.
 *
 * Use this endpoint to ensure that your SMTP integration is properly set up **before enabling real transactional or notification emails** in your application.
 *
 * @param params - The params for test sending email address.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/send-test-email}
 */
export const testSendingEmailAddress = async (
    params: ITestSendingEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.TEST_SENDING_EMAIL_ADDRESS_MESSAGE;
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Update an app integration SMTP
 *
 * Updates the app integration SMTP by the given id.
 *
 * @param id - The id of the app integration SMTP.
 * @param params - The params for updating an app integration SMTP.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/update-an-app-integration-smtp}
 */
export const updateAppIntegrationSMTP = async (
    id: IdType,
    params: IUpdateAppIntegrationSMTPParams,
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
        params,
        config,
    );

    return response.data;
};
