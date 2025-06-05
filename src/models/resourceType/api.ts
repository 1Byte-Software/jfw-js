import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { RESOURCE_TYPE_PATH } from './paths';
import {
    ICreateResourceTypeParams,
    IGetResourceTypesParams,
    IResourceType,
    IUpdateResourceTypeParams,
} from './types';

/**
 * # Create a resource type
 *
 * Creates a new resource type.
 *
 * @param params - The params for creating a new resource type.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/create-a-resource-type}
 */
export const createResourceType = async (
    params: ICreateResourceTypeParams,
    config?: AxiosRequestConfig,
) => {
    const url = RESOURCE_TYPE_PATH.CREATE_RESOURCE_TYPE;
    const response = await jfwAxios.post<HttpResponse<IResourceType>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete a resource type
 * 
 * Delete a resource type.
 *
 * @param id - The id of the resource type to delete.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/delete-a-resource-type}
 */
// #JFW-502
export const deleteResourceType = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.DELETE_RESOURCE_TYPE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get a resource type
 * 
 * Get a resource type.
 *
 * @param id - The id of the resource type to get.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-a-resource-type}
 */
export const getResourceType = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.GET_RESOURCE_TYPE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IResourceType>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Get resource types
 * 
 * Gets a list of resource types.
 *
 * @param params - The params for getting resource types.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-resource-types}
 */
export const getResourceTypes = async (
    params?: IGetResourceTypesParams,
    config?: AxiosRequestConfig,
) => {
    const url = RESOURCE_TYPE_PATH.GET_RESOURCE_TYPES;

    const response = await jfwAxios.get<HttpResponse<IResourceType[]>>(url, {
        ...config,
        params,
    });

    return response.data;
};

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
export const updateResourceType = async (
    id: IdType,
    params: IUpdateResourceTypeParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.UPDATE_RESOURCE_TYPE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<IResourceType>>(
        url,
        params,
        config,
    );

    return response.data;
};
