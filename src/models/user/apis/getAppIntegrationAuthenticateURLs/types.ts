import { IBaseParameters } from '../../../../core';
import { GetAppIntegrationAuthenticateURLsTypeResponse } from './constants';

export interface IAppIntegrationAuthenticateURL {
    appName: string;
    logoURL: string;
    authenticateURL: string;
}

export interface IGetAppIntegrationAuthenticateURLsQueryParameters {
    /**
     * The callback URL.
     * It is the URL that the user will be redirected to after logging in.
     */
    callbackUrl: string;

    /**
     * The return URL.
     * It is the URL that the user will be redirected to after canceling the login.
     */
    returnUrl: string;

    /**
     * The device code.
     * It is the code that the user will be detected as a device.
     */
    deviceCode?: string;

    /**
     * @remarks
     * Available values:
     * - `0` - RedirectUrl
     * - `1` - JsonFormat
     *
     * The type of the response after the authentication success.
     * Default is `0` (RedirectUrl).
     */
    typeResponse?: GetAppIntegrationAuthenticateURLsTypeResponse;
}

export interface IGetAppIntegrationAuthenticateURLsParameters
    extends Partial<IBaseParameters> {
    queryParameters: IGetAppIntegrationAuthenticateURLsQueryParameters;
}

export interface IGetAppIntegrationAuthenticateURLsOptions
    extends IGetAppIntegrationAuthenticateURLsParameters {}
