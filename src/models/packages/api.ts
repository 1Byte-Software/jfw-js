import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PACKAGE_PATH } from './paths';
import {
    IAddFeaturesToPackageParams,
    ICreatePackageParams,
    IPackage,
    IQueryPackageParams,
    IUpdatePackageParams,
} from './types';

/**
 * Gets a list of all packages.
 */
export const queryPackageAPI = async (
    params?: IQueryPackageParams,
    config?: AxiosRequestConfig,
) => {
    const url = PACKAGE_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponse<IPackage[]>>(url, {
        ...config,
        params,
    });
    return response.data;
};

/**
 * Gets a package by id.
 */
export const getPackageByIdAPI = async (id: IdType): Promise<IPackage> => {
    const url = generatePath(PACKAGE_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * Creates a new package.
 */
export const createPackageAPI = async (params: ICreatePackageParams) => {
    const url = PACKAGE_PATH.CREATE;
    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * Updates a package.
 */
export const updatePackageAPI = async (
    id: IdType,
    payload: IUpdatePackageParams,
) => {
    const url = generatePath(PACKAGE_PATH.UPDATE_BY_ID, {
        id,
    });
    const response = await jfwAxios.put(url, payload);

    return response.data;
};

/**
 * Deletes a package.
 */
export const deletePackageAPI = async (id: IdType) => {
    const url = generatePath(PACKAGE_PATH.DELETE_BY_ID, {
        id,
    });
    const response = await jfwAxios.delete(url);

    return response.data;
};

/**
 * #JFW-55: Xác nhận tài liệu api/packages/{id}/features
 * Adds the list of the feature from packageId.
 */
export const addFeaturesToPackageAPI = async (
    packageId: IdType,
    payload: IAddFeaturesToPackageParams[],
) => {
    const url = generatePath(PACKAGE_PATH.FEATURES.ADD_TO_PACKAGE, {
        id: packageId,
    });
    const response = await jfwAxios.post(url, payload);

    return response.data;
};

/**
 * Deletes the list feature from packageId.
 * @feature Will make in feature.
 */
export const deleteFeaturesFromPackageAPI = async () => {
    const url = generatePath(PACKAGE_PATH.DELETE_BY_ID, {});
};

/**
 * Gets a list of prices for a package.
 * @feature Will make in feature.
 */
export const getPriceOfPackageAPI = async () => {
    const url = generatePath(PACKAGE_PATH.DELETE_BY_ID, {});
};
