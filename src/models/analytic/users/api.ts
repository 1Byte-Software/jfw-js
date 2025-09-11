import { HttpResponse } from '../../../core';
import { AbstractAPI } from '../../base/AbstractAPI';
import { ANALYTIC_USER_PATH } from './path';
import { SummaryUserResponse } from './types';

export class AnalyticUsersAPI extends AbstractAPI {
    /**
     * # Retrieves a summary of users.
     *
     * Provides a high-level overview of the user base for the current brand, including total users and newly registered users (daily, weekly, monthly).
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/users}
     */
    public async getSummaryUsers() {
        return this.callAPI<HttpResponse<SummaryUserResponse>>({
            method: 'GET',
            path: ANALYTIC_USER_PATH.GET_SUMMARY_USERS,
        });
    }
}
