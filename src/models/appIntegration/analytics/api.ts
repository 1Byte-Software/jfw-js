import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_ANALYTICS_PATH } from './paths';
import {
    IAppIntegrationAnalytics,
    ICreateAppIntegrationAnalyticsParams,
    IUpdateAppIntegrationAnalyticsParams,
} from './types';

export class AppIntegrationAnalyticsAPI extends AbstractAPI {
    /**
     * # Creates an app integration analytics
     *
     * Creates a new app integration analytics.
     *
     * @param params - The params for creating a new app integration analytics.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/creates-an-app-integration-analytics}
     */
    public async createAppIntegrationAnalytics(
        params: ICreateAppIntegrationAnalyticsParams,
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_ANALYTICS_PATH.CREATE_APP_INTEGRATION_ANALYTICS;
        const response = await this.axios.post<
            HttpResponse<IAppIntegrationAnalytics>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Deletes an app integration analytics
     *
     * Deletes an app integration analytics by the given id.
     *
     * @param id - The id of the app integration analytics.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/deletes-an-app-integration-analytics}
     */
    public async deleteAppIntegrationAnalytics(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_ANALYTICS_PATH.DELETE_APP_INTEGRATION_ANALYTICS,
            {
                id,
            },
        );
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Gets an app integration analytics
     *
     * Gets an app integration analytics by the given id.
     *
     * @param id - The id of the app integration analytics.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/gets-an-app-integration-analytics}
     */
    public async getAppIntegrationAnalytics(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_ANALYTICS_PATH.GET_APP_INTEGRATION_ANALYTICS,
            {
                id,
            },
        );
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationAnalytics>
        >(url, config);

        return response.data;
    }

    /**
     * # Get apps integration analytics with brand
     *
     * List all app integration analytics.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/get-apps-integration-analytics}
     */
    public async getAppIntegrationAnalyticsWithBrand(
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_ANALYTICS_PATH.GET_APP_INTEGRATION_ANALYTICS_WITH_BRAND;
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationAnalytics[]>
        >(url, config);

        return response.data;
    }

    /**
     * # Updates an app integration analytics
     *
     * Updates an app integration analytics by the given id.
     *
     * @param params - The params for updating an app integration analytics.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/analytics/updates-an-app-integration-analytics}
     */
    public async updateAppIntegrationAnalytics(
        params: IUpdateAppIntegrationAnalyticsParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, ...bodyParams } = params;
        const url = generatePath(
            APP_INTEGRATION_ANALYTICS_PATH.UPDATE_APP_INTEGRATION_ANALYTICS,
            {
                id,
            },
        );
        const response = await this.axios.put<
            HttpResponse<IAppIntegrationAnalytics>
        >(url, bodyParams, config);

        return response.data;
    }
}
