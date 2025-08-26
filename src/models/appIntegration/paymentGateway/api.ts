import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_PAYMENT_GATEWAY_PATH } from './paths';
import {
    IAppIntegrationPaymentGateway,
    ICreateAppIntegrationPaymentGatewayParams,
    ITestCreatingCheckoutLinkParams,
    IUpdateAppIntegrationPaymentGatewayParams,
} from './types';

/**
 * # Create an app integration payment gateway
 *
 * Creates a new app integration payment gateway.
 *
 * @param params - The params for creating a new app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @link {@see https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/creates-an-app-integration-payment-gateway}
 */
export const createAppIntegrationPaymentGateway = async (
    params: ICreateAppIntegrationPaymentGatewayParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.CREATE_APP_INTEGRATION_PAYMENT_GATEWAY;
    const response = await jfwAxios.post<
        HttpResponse<IAppIntegrationPaymentGateway>
    >(url, params, config);

    return response.data;
};

/**
 * # Delete an app integration payment gateway
 *
 * Deletes an app integration payment gateway by the given id.
 *
 * @param id - The id of the app integration payment gateway to delete.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/deletes-an-app-integration-payment-gateway}
 */
export const deleteAppIntegrationPaymentGateway = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.DELETE_APP_INTEGRATION_PAYMENT_GATEWAY,
        { id },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get an app integration payment gateway
 *
 * Gets an app integration payment gateway by the given id.
 *
 * @param id - The id of the app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-an-app-integration-payment-gateway}
 */
export const getAppIntegrationPaymentGateway = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.GET_APP_INTEGRATION_PAYMENT_GATEWAY,
        { id },
    );
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPaymentGateway>
    >(url, config);

    return response.data;
};

/**
 * # Get apps integration payment gateway with brand
 *
 * Gets the list of the app integration payment gateways by the current brand.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/gets-app-integration-payment-gateways-with-brand}
 */
export const getAppsIntegrationPaymentGatewayWithBrand = async (
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_PAYMENT_GATEWAY_PATH.GET_APPS_INTEGRATION_PAYMENT_GATEWAY_WITH_BRAND;

    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationPaymentGateway[]>
    >(url, config);

    return response.data;
};

/**
 * # Test creating a checkout link
 *
 * This endpoint is used to **test the process of generating a checkout link**
 * for a given App Integration using the configured payment gateway settings.
 *
 * It allows developers to **validate that the integration with the payment gateway
 * is working as expected**, before enabling real payment flows in production.
 *
 * @param appIntegrationId - The id of the app integration.
 * @param params - The parameters for test building authentication url.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/test-create-checkout-link}
 */
export const testCreatingCheckoutLink = async (
    appIntegrationId: IdType,
    params: ITestCreatingCheckoutLinkParams,
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
        params,
        config,
    );

    return response.data;
};

/**
 * Updates an app integration payment gateway by the given id.
 *
 * @param id - The app integration payment gateway id.
 * @param params - The params for updating an app integration payment gateway.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/payment-gateway/updates-an-app-integration-payment-gateway}
 */
export const updateAppIntegrationPaymentGateway = async (
    id: IdType,
    params: IUpdateAppIntegrationPaymentGatewayParams,
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
    >(url, params, config);

    return response.data;
};
