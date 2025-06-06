import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PAYMENT_PATH } from './paths';
import { IGetPaymentsParams, IPayment, IPaymentDashboard } from './types';

/**
 * Get a payment
 *
 * Get a payment by the given id.
 *
 * @param id - The id of the payment.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/get-a-payment}
 */
export const getPayment = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PAYMENT_PATH.GET_PAYMENT, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IPayment>>(url, config);

    return response.data;
};

/**
 * # Get payments
 *
 * Gets the list of the payments by the given filter.
 *
 * @param params - The parameters for getting payments.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/get-payments}
 */
export const getPayments = async (
    params?: IGetPaymentsParams,
    config?: AxiosRequestConfig,
) => {
    const url = PAYMENT_PATH.GET_PAYMENTS;
    const response = await jfwAxios.get<HttpResponseList<IPayment>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Calculate the metric overview dashboard for the payments.
 *
 * @param testMode - Query parameter to enable the test mode.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/gets-the-overview-sell-dashboard}
 * #JFW-502
 */
export const getOverviewSellDashboard = async (
    testMode?: boolean,
    config?: AxiosRequestConfig,
) => {
    const url = PAYMENT_PATH.GET_OVERVIEW_SELL_DASHBOARD;
    const response = await jfwAxios.get<HttpResponse<IPaymentDashboard>>(url, {
        params: {
            testMode,
        },
        ...config,
    });

    return response.data;
};
