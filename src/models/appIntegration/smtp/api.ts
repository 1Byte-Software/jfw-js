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
    ISendTestEmailData,
    IUpdateAppIntegrationSMTPData,
} from './types';

/**
 * Creates a new app integration SMTP.
 *
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
 * Gets the app integration SMTP by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/smtp/gets-an-app-integration-smtp-with-brand}
 */
export const getAppIntegrationSMTPsWithBrandAPI = async (
    params?: IGetAppIntegrationSMTPsParams,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.GET_APP_INTEGRATION_SMTPS_WITH_BRAND;

    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMTP[]>>(
        url,
        {
            ...config,
            params,
        },
    );

    return response.data;
};

/**
 * Testing for send SMS base on user's setting.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message}
 */
export const sendTestEmailAPI = async (
    data: ISendTestEmailData,
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMTP_PATH.SEND_TEST_EMAIL;

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
