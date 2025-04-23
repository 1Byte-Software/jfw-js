import { DateType, IdType } from '../../base';
import { IAppIntegration } from '../types';
import { AppIntegrationAuthenticationStatus } from './constants';

export interface IAppIntegrationAuthentication {
    /**
     * Unique ID of the authentication integration.
     */
    id: string;

    /**
     * The app integration.
     */
    appIntegration: IAppIntegration;

    /**
     * The code of the app integration.
     */
    code: string;

    /**
     * The name of the app integration.
     */
    name: string;

    /**
     * The project Id of the app integration.
     */
    projectId: string;

    /**
     * The client email of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the email of the service account.
     */
    clientId: string;

    /**
     * The client secret of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the private key of the service account.
     */
    clientSecret: string;

    /**
     * The redirect URI of the app integration.
     * After the user logs in, the user is redirected to this URI.
     * This value must be mapped with the application configuration on the OAuth2 provider.
     */
    redirectUri: string;

    /**
     * The scope of the app integration.
     */
    scope: string;

    /**
     * The authentication endpoint of the app integration.
     */
    authEndpoint: string | null;

    /**
     * The token endpoint of the app integration.
     */
    tokenEndpoint: string | null;

    /**
     * The icon URL of the app integration.
     */
    iconUrl: string | null;

    /**
     * The tags of the app integration.
     */
    tags: string | null;

    /**
     * The description of the app integration.
     */
    description: string | null;

    /**
     * Available options: 0 - Inactive, 1 - Active
     */
    status: AppIntegrationAuthenticationStatus;

    /**
     * Flag to indicate if the authentication integration is the default. Default is false.
     */
    isDefault: boolean;

    createdDate: DateType;
}

//#region API types
export interface IGetAppIntegrationAuthenticationsWithBrandParams {}

export interface ICreateAppIntegrationAuthenticationData {
    /**
     * The app integration id.
     */
    appIntegrationId: IdType;

    /**
     * The code of the app integration.
     */
    code: string;

    /**
     * The name of the app integration.
     */
    name: string;

    /**
     * The project Id of the app integration.
     */
    projectId: string;

    /**
     * The client email of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the email of the service account.
     */
    clientId: string;

    /**
     * The client secret of the app integration.
     * This value is used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the private key of the service account.
     */
    clientSecret: string;

    /**
     * The redirect URI of the app integration.
     * After the user logs in, the user is redirected to this URI.
     * This value must be mapped with the application configuration on the OAuth2 provider.
     */
    redirectUri: string;

    /**
     * The scope of the app integration.
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
     * Available options: 0 - Inactive, 1 - Active
     */
    status?: AppIntegrationAuthenticationStatus;

    /**
     * Flag to indicate if the authentication integration is the default. Default is false.
     */
    isDefault?: boolean;
}

export type IUpdateAppIntegrationAuthenticationData =
    ICreateAppIntegrationAuthenticationData;

export interface ITestBuildingAuthenticationURLData {
    /**
     * The client email of the app integration used for OAuth2 methods.
     * For example, for Google OAuth2, this value is the email of the service account.
     * This is required for initiating the OAuth2 flow.
     */
    clientId: string;

    /**
     * The redirect URI of the app integration.
     * After the user logs in, they are redirected to this URI.
     * This must be registered with the OAuth2 provider and mapped correctly in your app configuration.
     */
    redirectUri: string;

    /**
     * The scope of the app integration defining access permissions.
     * For example, in Google OAuth2, scopes determine which APIs the token can access (e.g., profile, email).
     */
    scope: string;

    /**
     * The state of the app integration used to maintain state between request and callback.
     * This can be used to prevent CSRF attacks or store contextual data.
     */
    state?: string | null;
}

//#endregion
