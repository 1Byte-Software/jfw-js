import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_PAYMENT_GATEWAY_PATH } from './paths';
import {
    IAppIntegrationPaymentGateway,
    ICreateAppIntegrationPaymentGatewayData,
    IGetAppIntegrationPaymentGatewaysWithBrandParams,
    ITestingCreateCheckoutLinkData,
    IUpdateAppIntegrationPaymentGatewayData,
} from './types';

/**
 * Create an app integration payment gateway
 *
 * @link {@see https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/creates-an-app-integration-payment-gateway}
 */
export const createAppIntegrationPaymentGatewayAPI = async (
    data: ICreateAppIntegrationPaymentGatewayData,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.CREATE_APP_INTEGRATION_PAYMENT_GATEWAY;

    const response = await jfwAxios.post<
        HttpResponse<IAppIntegrationPaymentGateway>
    >(url, data, config);

    return response.data;
};

/**
 * Deletes an app integration payment gateway by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/deletes-an-app-integration-payment-gateway}
 */
export const deleteAppIntegrationPaymentGatewayAPI = async (
    appIntegrationPaymentGatewayId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.DELETE_APP_INTEGRATION_PAYMENT_GATEWAY,
        {
            id: appIntegrationPaymentGatewayId,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets a app integration payment gateway by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-an-app-integration-payment-gateway}
 */
export const getAppIntegrationPaymentGatewayAPI = async (
    appIntegrationPaymentGatewayId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.GET_APP_INTEGRATION_PAYMENT_GATEWAY,
        {
            id: appIntegrationPaymentGatewayId,
        },
    );
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPaymentGateway>
    >(url, config);

    return response.data;
};

/**
 * Gets the list of the app integration payment gateways by the current brand.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-app-integration-payment-gateways-with-brand}
 */
export const getAppIntegrationPaymentGatewaysWithBrandAPI = async (
    params?: IGetAppIntegrationPaymentGatewaysWithBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.GET_APP_INTEGRATION_PAYMENT_GATEWAYS_WITH_BRAND;

    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPaymentGateway[]>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Testing for create a checkout link
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/test-create-checkout-link}
 */
export const testingCreateCheckoutLinkAPI = async (
    appIntegrationId: IdType,
    data: ITestingCreateCheckoutLinkData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.TESTING_FOR_CREATE_CHECKOUT_LINK,
        {
            appIntegrationId,
        },
    );

    const response = await jfwAxios.post<
        HttpResponse<string>
    >(url, data, config);

    return response.data;
};

/**
 * Updates an app integration payment gateway by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/updates-an-app-integration-payment-gateway-copy}
 */
export const updateAppIntegrationPaymentGatewayAPI = async (
    appIntegrationPaymentGatewayId: IdType,
    data: IUpdateAppIntegrationPaymentGatewayData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.UPDATE_APP_INTEGRATION_PAYMENT_GATEWAY,
        {
            id: appIntegrationPaymentGatewayId,
        },
    );
    const response = await jfwAxios.put<
        HttpResponse<IAppIntegrationPaymentGateway>
    >(url, data, config);

    return response.data;
};
