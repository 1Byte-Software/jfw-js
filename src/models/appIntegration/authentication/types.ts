import { IPageable, ISortable } from '../../../core';
import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationAuthenticationStatus } from './constants';

export interface IAppIntegrationAuthentication {
    id: string;
    appIntegration: IAppIntegration;
    code: string;
    name: string;
    projectId: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scope: string;
    authEndpoint: string | null;
    tokenEndpoint: string | null;
    iconUrl: string | null;
    tags: string | null;
    description: string | null;
    status: AppIntegrationAuthenticationStatus;
    isDefault: boolean;
    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationAuthenticationsWithBrandParams
    extends IPageable,
        ISortable {
    /**
     * The app integration id to filter.
     */
    appIntegrationId?: string;

    /**
     * The code to filter
     */
    code?: string;

    /**
     * The name of filter.
     */
    name?: string;

    /**
     * The description of filter.
     */
    description?: string;

    /**
     * The project id of filter.
     */
    projectId?: string;

    /**
     * The client email of filter.
     */
    clientEmail?: string;

    /**
     * The client id of filter.
     */
    clientId?: string;

    /**
     * The client secret of filter.
     */
    clientSecret?: string;

    /**
     * The private key of filter.
     */
    privateKey?: string;

    /**
     * The redirect uri of filter.
     */
    redirectUri?: string;

    /**
     * The scope of filter.
     */
    scope?: string;

    /**
     * The auth endpoint of filter.
     */
    authEndpoint?: string;

    /**
     * The token endpoint of filter.
     */
    tokenEndpoint?: string;

    /**
     * The icon url of filter.
     */
    iconUrl?: string;

    /**
     * The tags of filter.
     */
    tags?: string;

    /**
     * The status of filter.
     *
     * @remarks string - enum
     * - `0` - `Inactive`
     * - `1` - `Active`
     */
    status?: AppIntegrationAuthenticationStatus;
}

export interface ICreateAppIntegrationAuthenticationData {
    /**
     * The app integration id.
     *
     * @remarks string - min: 1
     */
    appIntegrationId: IdType;

    /**
     * The code of the app integration.
     *
     * @remarks string - min: 1
     */
    code: string;

    /**
     * The name of the app integration.
     *
     * @remarks string - min: 1
     */
    name: string;

    /**
     * The project Id of the app integration.
     *
     * @remarks string - min: 1
     */
    projectId: string;

    /**
     * The client email of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the email of the service account.
     *
     * @remarks string - min: 1
     */
    clientId: string;

    /**
     * The client secret of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the private key of the service account.
     *
     * @remarks string - min: 1
     */
    clientSecret: string;

    /**
     * The redirect URI of the app integration.
     * After the user logs in, the user is redirected to this URI.
     * This value must be mapped with the application configuration on the OAuth2 provider.
     *
     * @remarks string - min: 1
     */
    redirectUri: string;

    /**
     * The scope of the app integration.
     *
     * @remarks string - min: 1
     */
    scope: string;

    /**
     * The authentication endpoint of the app integration.
     */
    authEndpoint?: string | null;

    /**
     * The token endpoint of the app integration.
     */
    tokenEndpoint?: string | null;

    /**
     * The icon URL of the app integration.
     */
    iconUrl?: string | null;

    /**
     * The tags of the app integration.
     */
    tags?: string | null;

    /**
     * The description of the app integration.
     */
    description?: string | null;

    /**
     * Possible options
     * - `0` - `Inactive`
     * - `1` - `Active`
     */
    status?: AppIntegrationAuthenticationStatus;

    /**
     * Flag to indicate if the authentication integration is the default.
     * @defaultValue `false`
     */
    isDefault?: boolean;
}

export type IUpdateAppIntegrationAuthenticationData =
    ICreateAppIntegrationAuthenticationData;

export interface ITestBuildingAuthenticationURLData {
    /**
     * The client email of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the email of the service account.
     * This is required for initiating the OAuth2 flow.
     *
     * @remarks string - min: 1
     */
    clientId: string;

    /**
     * The redirect URI of the app integration.
     * After the user logs in, they are redirected to this URI.
     * This value is must be mapping with the application configuration on the OAuth2 provider.
     *
     * @remarks string - min: 1
     */
    redirectUri: string;

    /**
     * The scope of the app integration.
     *
     * @remarks string - min: 1
     */
    scope: string;

    /**
     * The state of the app integration.
     */
    state?: string | null;
}

//#endregion
