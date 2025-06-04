import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { CONFIGURATION_PATH } from './paths';
import {
    IConfiguration,
    ICreateConfigurationParams,
    IGetConfigurationsParams,
    IUpdateConfigurationParams,
} from './types';

/**
 * # Create a configuration
 *
 * Creates a new configuration.
 *
 * @param params - The params for creating a new configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/create-a-configuration}
 */
export const createConfiguration = async (
    params: ICreateConfigurationParams,
    config?: AxiosRequestConfig,
) => {
    const url = CONFIGURATION_PATH.CREATE_CONFIGURATION;
    const response = await jfwAxios.post<HttpResponse<IConfiguration>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete a configuration
 *
 * Delete a configuration by the given id.
 *
 * @param id - The id of the configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/delete-a-configuration}
 */
export const deleteConfiguration = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CONFIGURATION_PATH.DELETE_CONFIGURATION, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get configurations
 *
 * Get configurations
 *
 * @param params - The params for getting configurations.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/get-configurations}
 */
export const getConfigurations = async (
    params?: IGetConfigurationsParams,
    config?: AxiosRequestConfig,
) => {
    const url = CONFIGURATION_PATH.GET_CONFIGURATIONS;
    const response = await jfwAxios.get<
        HttpResponse<HttpResponse<IConfiguration[]>>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Get a configuration
 *
 * Gets a configuration by the given id.
 *
 * @param id - The id of the configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/get-a-configuration}
 */
export const getConfiguration = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CONFIGURATION_PATH.GET_CONFIGURATION, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IConfiguration>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Update a configuration
 *
 * Updates a configuration by the given id.
 *
 * @param id - The id of the configuration.
 * @param params - The params for updating a configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/update-a-configuration}
 */
export const updateConfiguration = async (
    id: IdType,
    params: IUpdateConfigurationParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CONFIGURATION_PATH.UPDATE_CONFIGURATION, {
        id,
    });
    const response = await jfwAxios.put(url, params, config);

    return response.data;
};
