import { HttpResponse } from '../../../core';
import { AbstractAPI } from '../../base/AbstractAPI';
import { ANALYTIC_PAYMENT_PATH } from './path';
import { SummaryPaymentsResponse } from './types';

export class AnalyticPaymentsAPI extends AbstractAPI {
    /**
     * # Retrieves a summary of payments.
     *
     * Returns aggregated payment information (total payments, revenue, etc.). Can be filtered by testMode to include/exclude test transactions.
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/users}
     */
    public async getSummaryPayments() {
        return this.callAPI<HttpResponse<SummaryPaymentsResponse>>({
            method: 'GET',
            path: ANALYTIC_PAYMENT_PATH.GET_SUMMARY_PAYMENTS,
        });
    }
}
