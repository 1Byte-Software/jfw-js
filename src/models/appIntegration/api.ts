import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { APP_INTEGRATION_PATH } from './paths';
import { AppIntegrationPushNotificationAPI } from './pushNotification';
import { AppIntegrationReCAPTCHAAPI } from './recaptcha';
import { AppIntegrationSMSAPI } from './sms';
import { AppIntegrationSMTPAPI } from './smtp';
import { IAppIntegration, IGetAppIntegrationsParams } from './types';

export class AppIntegrationAPI {
    public sms: AppIntegrationSMSAPI;
    public pushNotification: AppIntegrationPushNotificationAPI;
    public smtp: AppIntegrationSMTPAPI;
    public reCAPTCHA: AppIntegrationReCAPTCHAAPI;

    constructor() {
        this.sms = new AppIntegrationSMSAPI();
        this.pushNotification = new AppIntegrationPushNotificationAPI();
        this.smtp = new AppIntegrationSMTPAPI();
        this.reCAPTCHA = new AppIntegrationReCAPTCHAAPI();
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
        const response = await jfwAxios.get<HttpResponse<IAppIntegration[]>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }
}
