import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { RESOURCE_TYPE_PATH } from './paths';
import {
    ICreateResourceTypeParams,
    IGetResourceTypesParams,
    IResourceType,
    IUpdateResourceTypeParams,
} from './types';

export class ResourceTypeAPI extends AbstractAPI {
    /**
     * # Create a resource type
     *
     * Creates a new resource type.
     *
     * @param params - The params for creating a new resource type.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/create-a-resource-type}
     */
    public async createResourceType(
        params: ICreateResourceTypeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = RESOURCE_TYPE_PATH.CREATE_RESOURCE_TYPE;
        const response = await this.axios.post<HttpResponse<IResourceType>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a resource type
     *
     * Delete a resource type.
     *
     * @param id - The id of the resource type to delete.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/delete-a-resource-type}
     */
    public async deleteResourceType(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(RESOURCE_TYPE_PATH.DELETE_RESOURCE_TYPE, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get a resource type
     *
     * Get a resource type.
     *
     * @param id - The id of the resource type to get.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-a-resource-type}
     */
    public async getResourceType(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(RESOURCE_TYPE_PATH.GET_RESOURCE_TYPE, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IResourceType>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get resource types
     *
     * Gets a list of resource types.
     *
     * @param params - The params for getting resource types.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-resource-types}
     */
    public async getResourceTypes(
        params?: IGetResourceTypesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = RESOURCE_TYPE_PATH.GET_RESOURCE_TYPES;

        const response = await this.axios.get<HttpResponse<IResourceType[]>>(
            url,
            {
                ...config,
                params,
            },
        );

        return response.data;
    }

    /**
     * # Update a resource type
     *
     * Updates a resourceType
     *
     * @param id - The id of the resource type to get.
     * @param params - The params for getting resource types.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/update-a-resource-type}
     */
    public async updateResourceType(
        id: IdType,
        params: IUpdateResourceTypeParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(RESOURCE_TYPE_PATH.UPDATE_RESOURCE_TYPE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<IResourceType>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
