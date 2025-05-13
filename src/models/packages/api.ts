import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IFeature } from '../feature';
import { IPrice } from '../price';
import { PACKAGE_PATH } from './paths';
import {
    IAddFeaturesToPackageData,
    ICreatePackageData,
    IPackage,
    IUpdatePackageData,
} from './types';

/**
 * Add features to a package.
 *
 * @param id - The package id.
 * @param data - The data for adding features to a package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package}
 */
export const addFeaturesToPackageAPI = async (
    id: IdType,
    data: IAddFeaturesToPackageData[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.ADD_FEATURE_TO_PACKAGE, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Creates a new package.
 *
 * @param data - The data for creating a new package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/create-a-package}
 */
export const createPackageAPI = async (
    data: ICreatePackageData,
    config?: AxiosRequestConfig,
) => {
    const url = PACKAGE_PATH.CREATE_PACKAGE;
    const response = await jfwAxios.post<HttpResponse<IPackage>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes a package.
 *
 * @param id - The id of the package to delete.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/delete-a-package}
 */
export const deletePackageAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.DELETE_PACKAGE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets a package
 *
 * @param id - The package id.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package}
 */
export const getPackageAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.GET_PACKAGE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IPackage>>(url, config);

    return response.data;
};

/**
 * Get packages
 *
 * @param params - The parameters for getting packages.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages}
 */
export const getPackagesAPI = async (config?: AxiosRequestConfig) => {
    const url = PACKAGE_PATH.GET_PACKAGES;
    const response = await jfwAxios.get<HttpResponse<IPackage[]>>(url, config);

    return response.data;
};

/**
 * Get prices by package id.
 *
 * @param id - The id of the package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package}
 */
export const getPricesFromPackageAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.GET_PRICES_FROM_PACKAGE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IPrice[]>>(url, config);

    return response.data;
};

/**
 * Updates a package.
 *
 * @param id - The package id.
 * @param data - The data for updating a package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/update-a-package}
 */
export const updatePackageAPI = async (
    id: IdType,
    data: IUpdatePackageData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.UPDATE_PACKAGE, {
        id,
    });

    const response = await jfwAxios.put<HttpResponse<IPackage>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Remove features from a package.
 *
 * @param id - The package id.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package}
 */
export const deleteFeaturesFromPackageAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.REMOVE_FEATURES_FROM_PACKAGE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get features by package id.
 *
 * @param id - The id of the package.
 * @param config - Optional axios request configuration object.
 * @see {@link Will update in feature}
 *
 * #JFW-268
 */
export const getFeaturesFromPackageAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.GET_FEATURES_FROM_PACKAGE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IFeature[]>>(url, config);

    return response.data;
};
