import { HttpResponse } from '../../../core';
import { AbstractAPI } from '../../base/AbstractAPI';
import { ANALYTIC_ISSUE_PATH } from './path';
import { SummaryIssuesResponse } from './types';

export class AnalyticIssuesAPI extends AbstractAPI {
    /**
     * # Retrieves a summary of issues.
     *
     * Provides aggregated issue statistics for the current brand, useful for monitoring product stability and performance.
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/issues}
     */
    public async getSummaryIssues() {
        return this.callAPI<HttpResponse<SummaryIssuesResponse>>({
            method: 'GET',
            path: ANALYTIC_ISSUE_PATH.GET_SUMMARY_ISSUES,
        });
    }
}
