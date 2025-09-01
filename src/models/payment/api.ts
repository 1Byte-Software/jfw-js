import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PAYMENT_PATH } from './paths';
import {
    IGeneratePaymentCheckoutLinkParams,
    IGetPaymentsParams,
    IPayment,
    IPaymentDashboard,
    IPaymentGenerateCheckoutLinkResponse,
} from './types';

export class PaymentAPI {
    /**
     * # Generate checkout link to pay payment
     *
     * Generate checkout link to pay the payment.
     *
     * @param params - The params for generating a checkout link to make the payment.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link}
     */
    public async generatePaymentCheckoutLink(
        params: IGeneratePaymentCheckoutLinkParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, appIntegrationId } = params;
        const url = generatePath(PAYMENT_PATH.GENERATE_PAYMENT_CHECKOUT_LINK, {
            id,
        });
        const response = await jfwAxios.post<
            HttpResponse<IPaymentGenerateCheckoutLinkResponse>
        >(url, null, {
            params: {
                appIntegrationId,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * Get a payment
     *
     * Get a payment by the given id.
     *
     * @param id - The id of the payment.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/get-a-payment}
     */
    public async getPayment(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PAYMENT_PATH.GET_PAYMENT, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<IPayment>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get payments
     *
     * Gets the list of the payments by the given filter.
     *
     * @param params - The parameters for getting payments.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/get-payments}
     */
    public async getPayments(
        params?: IGetPaymentsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PAYMENT_PATH.GET_PAYMENTS;
        const response = await jfwAxios.get<HttpResponseList<IPayment>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * Calculate the metric overview dashboard for the payments.
     *
     * @param testMode - Query parameter to enable the test mode.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/payments/gets-the-overview-sell-dashboard}
     */
    // #JFW-502
    public async getOverviewSellDashboard(
        testMode?: boolean,
        config?: AxiosRequestConfig,
    ) {
        const url = PAYMENT_PATH.GET_OVERVIEW_SELL_DASHBOARD;
        const response = await jfwAxios.get<HttpResponse<IPaymentDashboard>>(
            url,
            {
                params: {
                    testMode,
                },
                ...config,
            },
        );

        return response.data;
    }
}
