import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { APP_INTEGRATION_AUTHENTICATION_PATH } from './paths';
import {
    IAppIntegrationAuthentication,
    ICreateAppIntegrationAuthenticationData,
    IGetAppIntegrationAuthenticationsWithBrandParams,
    ITestBuildingAuthenticationURLData,
    IUpdateAppIntegrationAuthenticationData,
} from './types';

/**
 * Creates a new app integration authentication.
 *
 * @link {@see https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/creates-an-app-integration-authentication}
 */
export const createAppIntegrationAuthenticationAPI = async (
    data: ICreateAppIntegrationAuthenticationData,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_AUTHENTICATION_PATH.CREATE_APP_INTEGRATION_AUTHENTICATION;

    const response = await jfwAxios.post<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, data, config);

    return response.data;
};

/**
 * Deletes the app integration authentication by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/deletes-an-app-integration-authentication}
 */
export const deleteAppIntegrationAuthenticationAPI = async (
    appIntegrationAuthenticationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.DELETE_APP_INTEGRATION_AUTHENTICATION,
        {
            id: appIntegrationAuthenticationId,
        },
    );
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets the app integration authentication by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/gets-an-app-integration-authentication}
 */
export const getAppIntegrationAuthenticationAPI = async (
    appIntegrationAuthenticationId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.GET_APP_INTEGRATION_AUTHENTICATION,
        {
            id: appIntegrationAuthenticationId,
        },
    );
    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, config);

    return response.data;
};

/**
 * Get apps integration authentication with brand
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/list-the-apps-integration-authentication}
 */
export const getAppIntegrationAuthenticationsWithBrandAPI = async (
    params?: IGetAppIntegrationAuthenticationsWithBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url =
        APP_INTEGRATION_AUTHENTICATION_PATH.GET_APP_INTEGRATION_AUTHENTICATIONS_WITH_BRAND;

    const response = await jfwAxios.get<
        HttpResponse<IAppIntegrationAuthentication[]>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * This endpoint is used to simulate the process of building an authentication URL for a specific App Integration.
 * It helps validate that the configured authentication settings (e.g., OAuth2 parameters, redirect URIs, scopes) generate a correct and functional URL for initiating the authentication flow.
 *
 * Use this endpoint to verify the integration setup before enabling real authentication with third-party services.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/test-building-an-authentication-url}
 */
export const testBuildingAuthenticationURLAPI = async (
    appIntegrationId: IdType,
    data: ITestBuildingAuthenticationURLData,
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
        data,
        config,
    );

    return response.data;
};

/**
 * Updates the app integration authentication by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/app-integrations/authentication/updates-an-app-integration-authentication}
 */
export const updateAppIntegrationAuthenticationAPI = async (
    appIntegrationAuthenticationId: IdType,
    data: IUpdateAppIntegrationAuthenticationData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        APP_INTEGRATION_AUTHENTICATION_PATH.UPDATE_APP_INTEGRATION_AUTHENTICATION,
        {
            id: appIntegrationAuthenticationId,
        },
    );

    const response = await jfwAxios.put<
        HttpResponse<IAppIntegrationAuthentication>
    >(url, data, config);

    return response.data;
};
