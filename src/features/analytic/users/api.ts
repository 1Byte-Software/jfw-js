import { HttpResponse } from '../../../core';
import { AbstractAPI } from '../../base/AbstractAPI';
import { ANALYTIC_USER_PATH } from './path';
import {
    DailyUserAnalyticItem,
    SummaryUserResponse,
    UserGeographyAnalyticItem,
} from './types';

export class AnalyticUsersAPI extends AbstractAPI {
    /**
     * # Retrieves a summary of users.
     *
     * Provides a high-level overview of the user base for the current brand, including total users and newly registered users (daily, weekly, monthly).
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/users#get-api-v1-analytics-users-summary}
     */
    public async getSummaryUsers() {
        return this.callAPI<HttpResponse<SummaryUserResponse>>({
            method: 'GET',
            path: ANALYTIC_USER_PATH.GET_SUMMARY_USERS,
        });
    }

    /**
     * # Retrieves daily user analytics.
     *
     * Returns user registration and activity statistics within the specified date range. If no range is provided, defaults to the current period.
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/users#get-api-v1-analytics-users-daily}
     */
    public async getDailyUserAnalytics() {
        return this.callAPI<HttpResponse<DailyUserAnalyticItem[]>>({
            method: 'GET',
            path: ANALYTIC_USER_PATH.GET_DAILY_USERS_ANALYTICS,
        });
    }

    /**
     * # Retrieves user geography analytics.
     *
     * Provides distribution of users by geography (e.g., countries, regions) for the current brand, within the specified date range if provided.
     *
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/analytics/users#get-api-v1-analytics-users-geography}
     */
    public async getUserGeographyAnalytics() {
        return this.callAPI<HttpResponse<UserGeographyAnalyticItem[]>>({
            method: 'GET',
            path: ANALYTIC_USER_PATH.GET_USER_GEOGRAPHY_ANALYTICS,
        });
    }
}
