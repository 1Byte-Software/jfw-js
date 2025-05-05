import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_SMS_PATH } from './paths';
import {
    IAppIntegrationSMS,
    ICreateAppIntegrationSMSData,
    ISendSMSTextMessageData,
    IUpdateAppIntegrationSMSData,
} from './types';

/**
 * Creates a new app integration sms.
 *
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
 * Gets an app integration sms by the given id.
 *
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
 * List all app integration sms.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/gets-an-app-integration-sms-with-brand}
 */
export const getAppIntegrationSMSsWithBrandAPI = async (
    config?: AxiosRequestConfig,
) => {
    const url = APP_INTEGRATION_SMS_PATH.GET_APP_INTEGRATION_SMSS_WITH_BRAND;

    const response = await jfwAxios.get<HttpResponse<IAppIntegrationSMS[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Testing for send SMS base on user's setting.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/sms/send-sms-test-message}
 */
export const sendSMSTextMessageAPI = async (
    appIntegrationId: IdType,
    data: ISendSMSTextMessageData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(APP_INTEGRATION_SMS_PATH.SEND_SMS_TEST_MESSAGE, {
        appIntegrationId,
    });

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Updates an app integration sms by the given id.
 *
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
