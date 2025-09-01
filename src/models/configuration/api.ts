import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { CONFIGURATION_PATH } from './paths';
import {
    IConfiguration,
    ICreateConfigurationParams,
    IGetConfigurationsParams,
    IUpdateConfigurationParams,
} from './types';

export class ConfigurationAPI extends AbstractAPI {
    /**
     * # Create a configuration
     *
     * Creates a new configuration.
     *
     * @param params - The params for creating a new configuration.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/create-a-configuration}
     */
    public async createConfiguration(
        params: ICreateConfigurationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = CONFIGURATION_PATH.CREATE_CONFIGURATION;
        const response = await this.axios.post<HttpResponse<IConfiguration>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a configuration
     *
     * Delete a configuration by the given id.
     *
     * @param id - The id of the configuration.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/delete-a-configuration}
     */
    public async deleteConfiguration(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(CONFIGURATION_PATH.DELETE_CONFIGURATION, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get configurations
     *
     * Get configurations
     *
     * @param params - The params for getting configurations.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/get-configurations}
     */
    public async getConfigurations(
        params?: IGetConfigurationsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = CONFIGURATION_PATH.GET_CONFIGURATIONS;
        const response = await this.axios.get<
            HttpResponse<HttpResponse<IConfiguration[]>>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get a configuration
     *
     * Gets a configuration by the given id.
     *
     * @param id - The id of the configuration.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/configurations/get-a-configuration}
     */
    public async getConfiguration(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(CONFIGURATION_PATH.GET_CONFIGURATION, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IConfiguration>>(
            url,
            config,
        );

        return response.data;
    }

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
    public async updateConfiguration(
        id: IdType,
        params: IUpdateConfigurationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(CONFIGURATION_PATH.UPDATE_CONFIGURATION, {
            id,
        });
        const response = await this.axios.put(url, params, config);

        return response.data;
    }
}
