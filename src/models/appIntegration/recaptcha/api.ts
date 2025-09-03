import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { AbstractAPI } from '../../base/AbstractAPI';
import { APP_INTEGRATION_RECAPTCHA_PATH } from './paths';
import {
    IAppIntegrationReCAPTCHA,
    ICreateAppIntegrationReCAPTCHAParams,
    IUpdateAppIntegrationReCAPTCHAParams,
} from './types';

export class AppIntegrationReCAPTCHAAPI extends AbstractAPI {
    /**
     * # Creates an app integration reCAPTCHA
     *
     * Creates a new app integration ReCaptcha.
     *
     * @param params - The params for creating a new app integration reCAPTCHA.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/creates-an-app-integration-recaptcha}
     */
    public async createAppIntegrationReCAPTCHA(
        params: ICreateAppIntegrationReCAPTCHAParams,
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_RECAPTCHA_PATH.CREATE_APP_INTEGRATION_RECAPTCHA;
        const response = await this.axios.post<
            HttpResponse<IAppIntegrationReCAPTCHA>
        >(url, params, config);

        return response.data;
    }

    /**
     * # Deletes an app integration reCAPTCHA
     *
     * Deletes an app integration ReCAPTCHA by the given id.
     *
     * @param id - The id of the app integration ReCAPTCHA.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/deletes-an-app-integration-recaptcha}
     */
    public async deleteAppIntegrationReCAPTCHA(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_RECAPTCHA_PATH.DELETE_APP_INTEGRATION_RECAPTCHA,
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
     * # Gets an app integration reCAPTCHA
     *
     * Gets an app integration ReCAPTCHA by the given id.
     *
     * @param id - The id of the app integration ReCAPTCHA.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/gets-an-app-integration-recaptcha}
     */
    public async getAppIntegrationReCAPTCHA(
        id: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            APP_INTEGRATION_RECAPTCHA_PATH.GET_APP_INTEGRATION_RECAPTCHA,
            {
                id,
            },
        );
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationReCAPTCHA>
        >(url, config);

        return response.data;
    }

    /**
     * # Get apps integration recaptcha with brand
     *
     * List all app integration ReCAPTCHA.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/get-apps-integration-recaptcha}
     */
    public async getAppsIntegrationReCAPTCHAWithBrand(
        config?: AxiosRequestConfig,
    ) {
        const url =
            APP_INTEGRATION_RECAPTCHA_PATH.GET_APPS_INTEGRATION_RECAPTCHA_WITH_BRAND;
        const response = await this.axios.get<
            HttpResponse<IAppIntegrationReCAPTCHA[]>
        >(url, config);

        return response.data;
    }

    /**
     * # Updates an app integration reCAPTCHA
     *
     * Updates an app integration ReCAPTCHA by the given id.
     *
     * @param params - The params for updating an app integration ReCAPTCHA.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/recaptcha/updates-an-app-integration-recaptcha}
     */
    public async updateAppIntegrationReCAPTCHA(
        params: IUpdateAppIntegrationReCAPTCHAParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, ...bodyParams } = params;
        const url = generatePath(
            APP_INTEGRATION_RECAPTCHA_PATH.UPDATE_APP_INTEGRATION_RECAPTCHA,
            {
                id,
            },
        );
        const response = await this.axios.put<
            HttpResponse<IAppIntegrationReCAPTCHA>
        >(url, bodyParams, config);

        return response.data;
    }
}
