import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PAYMENT_PATH } from './paths';
import {
    IGetPaymentDashboardParams,
    IGetPaymentsParams,
    IPayment,
    IPaymentDashboard,
} from './types';

/**
 * Gets the list of the payments by the given filter.
 *
 * @param params - The parameters for getting payments.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/get-payments}
 */
export const getPaymentsAPI = async (
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
 * Get a payment by the given id.
 *
 * @param id - The id of the payment.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/get-a-payment}
 */
export const getPaymentAPI = async (
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
 * Calculate the metric overview dashboard for the payments.
 *
 * @param params - The The parameters for calculating the metrics in the payments overview dashboard.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/gets-the-overview-sell-dashboard}
 */
export const getOverviewSellDashboardAPI = async (
    params: IGetPaymentDashboardParams,
    config?: AxiosRequestConfig,
) => {
    const url = PAYMENT_PATH.GET_OVERVIEW_SELL_DASHBOARD;
    const response = await jfwAxios.get<HttpResponse<IPaymentDashboard>>(url, {
        params,
        ...config,
    });

    return response.data;
};
