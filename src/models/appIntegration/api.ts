import { Axios, AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { APP_INTEGRATION_PATH } from './paths';
import { IAppIntegration, IGetAppIntegrationsParams } from './types';
import { AbstractAPI } from '../base/AbstractAPI';
import { AppIntegrationSMSAPI } from './sms/api';
import { AppIntegrationPushNotificationAPI } from './pushNotification/api';
import { AppIntegrationSMTPAPI } from './smtp/api';
import { AppIntegrationReCAPTCHAAPI } from './recaptcha/api';

export class AppIntegrationAPI extends AbstractAPI {
    public sms: AppIntegrationSMSAPI;
    public pushNotification: AppIntegrationPushNotificationAPI;
    public smtp: AppIntegrationSMTPAPI;
    public reCAPTCHA: AppIntegrationReCAPTCHAAPI;

    constructor(protected axios: Axios) {
        super(axios);
        this.sms = new AppIntegrationSMSAPI(axios);
        this.pushNotification = new AppIntegrationPushNotificationAPI(axios);
        this.smtp = new AppIntegrationSMTPAPI(axios);
        this.reCAPTCHA = new AppIntegrationReCAPTCHAAPI(axios);
    }

    /**
     * # Get apps integration
     *
     * List all the app integration by the given type.
     *
     * @param params - The params for getting app integrations.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/get-app-integrations}
     */
    public async getAppIntegrations(
        params?: IGetAppIntegrationsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = APP_INTEGRATION_PATH.GET_APP_INTEGRATIONS;
        const response = await this.axios.get<HttpResponse<IAppIntegration[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }
}
