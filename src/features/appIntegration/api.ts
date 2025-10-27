import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { AppIntegrationAnalyticsAPI } from './analytics/api';
import { AppIntegrationAuthenticationAPI } from './authentication/api';
import { APP_INTEGRATION_PATH } from './paths';
import { AppIntegrationPaymentGatewayAPI } from './paymentGateway/api';
import { AppIntegrationPushNotificationAPI } from './pushNotification/api';
import { AppIntegrationReCAPTCHAAPI } from './recaptcha/api';
import { AppIntegrationSMSAPI } from './sms/api';
import { AppIntegrationSMTPAPI } from './smtp/api';
import { IAppIntegration, IGetAppIntegrationsParams } from './types';

export class AppIntegrationAPI extends AbstractAPI {
    public analytics: AppIntegrationAnalyticsAPI;
    public authentication: AppIntegrationAuthenticationAPI;
    public paymentGateway: AppIntegrationPaymentGatewayAPI;
    public pushNotification: AppIntegrationPushNotificationAPI;
    public reCAPTCHA: AppIntegrationReCAPTCHAAPI;
    public sms: AppIntegrationSMSAPI;
    public smtp: AppIntegrationSMTPAPI;

    constructor(protected axios: AxiosInstance) {
        super(axios);
        this.analytics = new AppIntegrationAnalyticsAPI(axios);
        this.authentication = new AppIntegrationAuthenticationAPI(axios);
        this.paymentGateway = new AppIntegrationPaymentGatewayAPI(axios);
        this.pushNotification = new AppIntegrationPushNotificationAPI(axios);
        this.reCAPTCHA = new AppIntegrationReCAPTCHAAPI(axios);
        this.sms = new AppIntegrationSMSAPI(axios);
        this.smtp = new AppIntegrationSMTPAPI(axios);
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
