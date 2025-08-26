import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_AUTHENTICATION_PATH } from './paths';
import {
    IAppIntegrationAuthentication,
    ICreateAppIntegrationAuthenticationParams,
    ICreateAppIntegrationAuthenticationWithImportFileSettingsParams,
    IGetAppIntegrationAuthenticationsWithBrandParams,
    ITestBuildingAuthenticationURLParams,
    IUpdateAppIntegrationAuthenticationParams,
} from './types';

/**
 * # Creates an app integration authentication
 *
 * Creates a new app integration authentication.
 *
 * @param params - The params for creating a new app integration authentication.
 * @param config - Optional axios request configuration object.
 * @link {@see https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/creates-an-app-integration-authentication}
 */
export const createAppIntegrationAuthentication = async (
    params: ICreateAppIntegrationAuthenticationParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_AUTHENTICATION_PATH.CREATE_APP_INTEGRATION_AUTHENTICATION;
    const response = await jfwAxios.post<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, params, config);

    return response.data;
};

/**
 * # Creates an app integration authentication with import file settings
 *
 * Creates a new app integration authentication with import file setting.
 *
 * @param params - The params for creating a new app integration authentication with import file setting.
 * @param config - Optional axios request configuration object.
 * @link {@see https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/create-an-app-integration-authentication-by-import-file}
 */
export const createAppIntegrationAuthenticationWithImportFileSettings = async (
    params: ICreateAppIntegrationAuthenticationWithImportFileSettingsParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_AUTHENTICATION_PATH.CREATE_APP_INTEGRATION_AUTHENTICATION_WITH_IMPORT_FILE_SETTINGS;
    const response = await jfwAxios.post<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, params, config);

    return response.data;
};

/**
 * # Deletes an app integration authentication
 *
 * Deletes the app integration authentication by the given id.
 *
 * @param id - The id of the app integration authentication.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/deletes-an-app-integration-authentication}
 */
export const deleteAppIntegrationAuthentication = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.DELETE_APP_INTEGRATION_AUTHENTICATION,
        {
            id,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Gets an app integration authentication
 *
 * Gets the app integration authentication by the given id.
 *
 * @param id - The id of the app integration authentication
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/gets-an-app-integration-authentication}
 */
export const getAppIntegrationAuthentication = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.GET_APP_INTEGRATION_AUTHENTICATION,
        {
            id,
        },
    );
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, config);

    return response.data;
};

/**
 * # Get apps integration authentication with brand
 *
 * Get apps integration authentication with brand
 *
 * @param params - The parameters for getting apps integration authentication with brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/list-the-apps-integration-authentication}
 */
export const getAppsIntegrationAuthenticationWithBrand = async (
    params?: IGetAppIntegrationAuthenticationsWithBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_AUTHENTICATION_PATH.GET_APPS_INTEGRATION_AUTHENTICATION_WITH_BRAND;
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationAuthentication[]>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * #Test building an authentication URL
 *
 * This endpoint is used to simulate the process of building an authentication URL for a specific App Integration.
 * It helps validate that the configured authentication settings (e.g., OAuth2 parameters, redirect URIs, scopes) generate a correct and functional URL for initiating the authentication flow.
 *
 * Use this endpoint to verify the integration setup before enabling real authentication with third-party services.
 *
 * @param appIntegrationId - The id of the appIntegrationId.
 * @param params - The params for test building authentication url.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/test-building-an-authentication-url}
 */
export const testBuildingAuthenticationURL = async (
    appIntegrationId: IdType,
    params: ITestBuildingAuthenticationURLParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.TEST_BUILDING_AUTHENTICATION_URL,
        {
            appIntegrationId,
        },
    );
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Updates an app integration authentication
 *
 * Updates the app integration authentication by the given id.
 *
 * @param id - The id of the app integration authentication.
 * @param params - The params for updating an app integration authentication.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/updates-an-app-integration-authentication}
 */
export const updateAppIntegrationAuthentication = async (
    id: IdType,
    params: IUpdateAppIntegrationAuthenticationParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.UPDATE_APP_INTEGRATION_AUTHENTICATION,
        {
            id,
        },
    );
    const response = await jfwAxios.put<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, params, config);

    return response.data;
};
