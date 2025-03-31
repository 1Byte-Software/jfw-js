import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { RESOURCE_TYPE_PATH } from './paths';
import {
    ICreateResourceTypeParams,
    IResourceType,
    IQueryResourceTypeParams,
    IUpdateResourceTypeParams,
} from './types';
import { HttpResponse } from '../../core';

/**
 * Gets a list of all resourceTypes.
 */
export const queryResourceTypeAPI = async (
    params?: IQueryResourceTypeParams,
    config?: AxiosRequestConfig,
) => {
    const url = RESOURCE_TYPE_PATH.QUERY;

    const response = await jfwAxios.get<HttpResponse<IResourceType[]>>(url, {
        ...config,
        params,
    });

    return response;
};

/**
 * Gets a resourceType
 */
export const getResourceTypeByIdAPI = async (
    resourceTypeId: IdType,
    config?: AxiosRequestConfig,
): Promise<IResourceType> => {
    const url = generatePath(RESOURCE_TYPE_PATH.GET_BY_ID, {
        id: resourceTypeId,
    });
    const response = await jfwAxios.get(url, config);

    return response.data;
};

/**
 * Add a new resourceType
 */
export const createResourceTypeAPI = async (
    params: ICreateResourceTypeParams,
    config?: AxiosRequestConfig,
) => {
    const url = RESOURCE_TYPE_PATH.CREATE;
    const response = await jfwAxios.post(url, params, config);

    return response.data;
};

/**
 * Updates a resourceType
 */
export const updateResourceTypeByIdAPI = async (
    resourceTypeId: IdType,
    payload: IUpdateResourceTypeParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.UPDATE_BY_ID, {
        id: resourceTypeId,
    });
    const response = await jfwAxios.put(url, payload, config);

    return response.data;
};

/**
 * Deletes a resourceType
 */
export const deleteResourceTypeByIdAPI = async (
    resourceTypeId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(RESOURCE_TYPE_PATH.DELETE_BY_ID, {
        id: resourceTypeId,
    });
    const response = await jfwAxios.delete(url, config);

    return response.data;
};
