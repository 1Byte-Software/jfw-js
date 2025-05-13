import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { CONFIGURATION_PATH } from './paths';
import {
    IConfiguration,
    ICreateConfigurationData,
    IGetConfigurationsParams,
    IUpdateConfigurationData,
} from './types';

/**
 * Creates a new configuration.
 *
 * @param data - The data for creating a new configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/create-a-configuration}
 * #JFW-307
 */
export const createConfigurationAPI = async (
    data: ICreateConfigurationData,
    config?: AxiosRequestConfig,
) => {
    const url = CONFIGURATION_PATH.CREATE_CONFIGURATION;
    const response = await jfwAxios.post<HttpResponse<IConfiguration>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Delete a configuration by the given id.
 *
 * @param id - The id of the configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/delete-a-configuration}
 */
export const deleteConfigurationAPI = async (
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
 * Get configurations
 *
 * @param params - The parameters for getting configurations.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/get-configurations}
 * JFW-280
 */
export const getConfigurationsAPI = async (
    params?: IGetConfigurationsParams,
    config?: AxiosRequestConfig,
) => {
    const url = CONFIGURATION_PATH.GET_CONFIGURATIONS;
    const response = await jfwAxios.get<
        HttpResponse<HttpResponseList<IConfiguration>>
    >(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Gets a configuration by the given id.
 *
 * @param id - The id of the configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/get-a-configuration}
 */
export const getConfigurationAPI = async (
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
 * Updates a configuration by the given id.
 *
 * @param id - The id of the configuration.
 * @param data - The data for updating a configuration.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/update-a-configuration}
 */
export const updateConfigurationAPI = async (
    id: IdType,
    data: IUpdateConfigurationData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CONFIGURATION_PATH.UPDATE_CONFIGURATION, {
        id,
    });
    const response = await jfwAxios.put(url, data, config);

    return response.data;
};
