import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { RESOURCE_TYPE_PATH } from './paths';
import {
    ICreateResourceTypeData,
    IGetResourceTypesParams,
    IResourceType,
    IUpdateResourceTypeData
} from './types';

/**
 * Creates a new resource type.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/create-a-resource-type}
 */
export const createResourceTypeAPI = async (
    data: ICreateResourceTypeData,
    config?: AxiosRequestConfig,
) => {
    const url = RESOURCE_TYPE_PATH.CREATE_RESOURCE_TYPE;
    const response = await jfwAxios.post<HttpResponse<IResourceType>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Delete a resource type.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/delete-a-resource-type}
 */
export const deleteResourceTypeAPI = async (
    resourceTypeId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.DELETE_RESOURCE_TYPE, {
        id: resourceTypeId,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get a resource type.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-a-resource-type}
 */
export const getResourceTypeAPI = async (
    resourceTypeId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.GET_RESOURCE_TYPE, {
        id: resourceTypeId,
    });
    const response = await jfwAxios.get<HttpResponse<IResourceType>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Gets a list of resource types.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/resource-types/get-resource-types}
 */
export const getResourceTypesAPI = async (
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
 * Updates a resourceType
 */
export const updateResourceTypeByIdAPI = async (
    resourceTypeId: IdType,
    data: IUpdateResourceTypeData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.UPDATE_RESOURCE_TYPE, {
        id: resourceTypeId,
    });

    const response = await jfwAxios.put<HttpResponse<IResourceType>>(
        url,
        data,
        config,
    );

    return response.data;
};
