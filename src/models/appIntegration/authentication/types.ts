import { IPageable, ISortable } from '../../../core';
import { IBaseObject } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationAuthenticationStatus } from './constants';

export interface IAppIntegrationAuthentication extends IBaseObject {
    /**
     * The app integration dto.
     */
    appIntegration: IAppIntegration;

    /**
     * The code of the app integration.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the app integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The project Id of the app integration.
     *
     * @remarks min: 1
     */
    projectId: string;

    /**
     * The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account.
     *
     * @remarks min: 1
     */
    clientId: string;

    /**
     * The client secret of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the private key of the service account.
     *
     * @remarks min: 1
     */
    clientSecret: string;

    /**
     * The redirect URI of the app integration. After the user logs in, the user is redirected to this URI. This value is must be mapping with the application configuration on the OAuth2 provider.
     *
     * @remarks min: 1
     */
    redirectURI: string;

    /**
     * The scope of the app integration.
     *
     * @remarks min: 1
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
    iconURL?: string | null;

    /**
     * The tags of the app integration.
     */
    tags?: string | null;

    /**
     * The description of the app integration.
     */
    description?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status: AppIntegrationAuthenticationStatus;

    /**
     * Flag to indicate if the authentication integration is the default.
     */
    isDefault: boolean;
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
     * The redirect URI of filter.
     */
    redirectURI?: string;

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
     * The icon URL of filter.
     */
    iconURL?: string;

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

export interface ICreateAppIntegrationAuthenticationParams {
    /**
     * The app integration id.
     *
     * @remarks min: 1
     */
    appIntegrationId: string;

    /**
     * The code of the app integration.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the app integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The project Id of the app integration.
     *
     * @remarks min: 1
     */
    projectId: string;

    /**
     * The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account.
     *
     * @remarks min: 1
     */
    clientId: string;

    /**
     * The client secret of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the private key of the service account.
     *
     * @remarks min: 1
     */
    clientSecret: string;

    /**
     * The redirect URI of the app integration. After the user logs in, the user is redirected to this URI. This value is must be mapping with the application configuration on the OAuth2 provider.
     *
     * @remarks uri - min: 1
     */
    redirectURI: string;

    /**
     * The scope of the app integration.
     *
     * @remarks min: 1
     */
    scope: string;

    /**
     * The authentication endpoint of the app integration.
     *
     * @remarks uri
     */
    authEndpoint?: string | null;

    /**
     * The token endpoint of the app integration.
     *
     * @remarks uri
     */
    tokenEndpoint?: string | null;

    /**
     * The icon URL of the app integration.
     *
     * @remarks uri
     */
    iconURL?: string | null;

    /**
     * The tags of the app integration.
     */
    tags?: string | null;

    /**
     * The description of the app integration.
     */
    description?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationAuthenticationStatus;

    /**
     * Flag to indicate if the authentication integration is the default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;
}

export interface ICreateAppIntegrationAuthenticationWithImportFileSettingsParams {
    /**
     * The app integration id.
     *
     * @remarks min: 1
     */
    appIntegrationId: string;

    /**
     * The file setting to import.
     *
     * @remarks binary
     */
    file: File;
}

export interface IUpdateAppIntegrationAuthenticationParams {
    /**
     * The app integration id.
     *
     * @remarks min: 1
     */
    appIntegrationId: string;

    /**
     * The code of the app integration.
     *
     * @remarks min: 1
     */
    code: string;

    /**
     * The name of the app integration.
     *
     * @remarks min: 1
     */
    name: string;

    /**
     * The project Id of the app integration.
     *
     * @remarks min: 1
     */
    projectId: string;

    /**
     * The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account.
     *
     * @remarks min: 1
     */
    clientId: string;

    /**
     * The client secret of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the private key of the service account.
     *
     * @remarks min: 1
     */
    clientSecret: string;

    /**
     * The redirect URI of the app integration. After the user logs in, the user is redirected to this URI. This value is must be mapping with the application configuration on the OAuth2 provider.
     *
     * @remarks uri - min: 1
     */
    redirectURI: string;

    /**
     * The scope of the app integration.
     *
     * @remarks min: 1
     */
    scope: string;

    /**
     * The authentication endpoint of the app integration.
     *
     * @remarks uri
     */
    authEndpoint?: string | null;

    /**
     * The token endpoint of the app integration.
     *
     * @remarks uri
     */
    tokenEndpoint?: string | null;

    /**
     * The icon URL of the app integration.
     *
     * @remarks uri
     */
    iconURL?: string | null;

    /**
     * The tags of the app integration.
     */
    tags?: string | null;

    /**
     * The description of the app integration.
     */
    description?: string | null;

    /**
     * The status of the app integration.
     *
     * @remarks enum
     */
    status?: AppIntegrationAuthenticationStatus;

    /**
     * Flag to indicate if the authentication integration is the default.
     *
     * @defaultValue `false`
     */
    isDefault?: boolean | null;
}

export interface ITestBuildingAuthenticationURLParams {
    /**
     * The client email of the app integration. This value is used for OAuth2 methods. For example, for Google OAuth2, this value is the email of the service account.
     *
     * @remarks min: 1
     */
    clientId: string;

    /**
     * The redirect URI of the app integration. After the user logs in, the user is redirected to this URI. This value is must be mapping with the application configuration on the OAuth2 provider.
     *
     * @remarks min: 1
     */
    redirectURI: string;

    /**
     * The scope of the app integration.
     *
     * @remarks min: 1
     */
    scope: string;

    /**
     * The state of the app integration.
     */
    state?: string | null;
}
//#endregion
