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
    ITestCreatingCheckoutLinkData,
    IUpdateAppIntegrationPaymentGatewayData,
} from './types';

/**
 * Create an app integration payment gateway
 *
 * @param data - The data for creating a new app integration payment gateway.
 * @param config - Optional axios request configuration object.
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
 * @param id - The app integration payment gateway id.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/deletes-an-app-integration-payment-gateway}
 */
export const deleteAppIntegrationPaymentGatewayAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.DELETE_APP_INTEGRATION_PAYMENT_GATEWAY,
        {
            id,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets an app integration payment gateway by the given id.
 *
 * @param id - The id of the app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-an-app-integration-payment-gateway}
 */
export const getAppIntegrationPaymentGatewayAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.GET_APP_INTEGRATION_PAYMENT_GATEWAY,
        {
            id,
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
 * @param params - The parameters for getting list of the app integration payment gateways by the current brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-app-integration-payment-gateways-with-brand}
 */
export const getAppsIntegrationPaymentGatewayWithBrandAPI = async (
    params?: IGetAppIntegrationPaymentGatewaysWithBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.GET_APPS_INTEGRATION_PAYMENT_GATEWAY_WITH_BRAND;
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPaymentGateway[]>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * This endpoint is used to **test the process of generating a checkout link** for a given App Integration using the configured payment gateway settings.
 *
 * It allows developers to **validate that the integration with the payment gateway is working as expected**, before enabling real payment flows in production.
 *
 * @param appIntegrationId - The id of the appIntegrationId.
 * @param data - The data for test building authentication url.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/test-create-checkout-link}
 * #JFW-353
 */
export const testCreatingCheckoutLinkAPI = async (
    appIntegrationId: IdType,
    data: ITestCreatingCheckoutLinkData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.TEST_CREATING_CHECKOUT_LINK,
        {
            appIntegrationId,
        },
    );
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Updates an app integration payment gateway by the given id.
 *
 * @param id - The app integration payment gateway id.
 * @param data - The data for updating an app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/updates-an-app-integration-payment-gateway-copy}
 */
export const updateAppIntegrationPaymentGatewayAPI = async (
    id: IdType,
    data: IUpdateAppIntegrationPaymentGatewayData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.UPDATE_APP_INTEGRATION_PAYMENT_GATEWAY,
        {
            id,
        },
    );
    const response = await jfwAxios.put<
        HttpResponse<IAppIntegrationPaymentGateway>
    >(url, data, config);

    return response.data;
};
