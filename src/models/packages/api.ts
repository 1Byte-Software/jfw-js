import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IPrice } from '../price';
import { PACKAGE_PATH } from './paths';
import {
    IAddFeaturesToPackageParams,
    ICreatePackageParams,
    IFeatureOfPackage,
    IPackage,
    IUpdatePackageParams,
} from './types';

/**
 * # Add features to a package
 *
 * Add features to a package.
 *
 * @param id - The package id.
 * @param params - The params for adding features to a package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package}
 */
export const addFeaturesToPackage = async (
    id: IdType,
    params: IAddFeaturesToPackageParams[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.ADD_FEATURE_TO_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.post<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Create a package
 *
 * Creates a new package.
 *
 * @param params - The params for creating a new package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/create-a-package}
 */
export const createPackage = async (
    params: ICreatePackageParams,
    config?: AxiosRequestConfig,
) => {
    const url = PACKAGE_PATH.CREATE_PACKAGE;
    const response = await jfwAxios?.post<HttpResponse<IPackage>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete a package
 *
 * Deletes a package.
 *
 * @param id - The id of the package to delete.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/delete-a-package}
 */
export const deletePackage = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.DELETE_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get a package
 *
 * Gets a package
 *
 * @param id - The package id.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package}
 */
export const getPackage = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(PACKAGE_PATH.GET_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.get<HttpResponse<IPackage>>(url, config);

    return response.data;
};

/**
 * # Get features from a package
 *
 * Get features from a package
 *
 * @param id - The id of the package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-features-from-package}
 */
export const getFeaturesFromPackage = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.GET_FEATURES_FROM_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.get<HttpResponse<IFeatureOfPackage[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Get packages
 *
 * Get packages
 *
 * @param params - The params for getting packages.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages}
 */
export const getPackages = async (config?: AxiosRequestConfig) => {
    const url = PACKAGE_PATH.GET_PACKAGES;
    const response = await jfwAxios?.get<HttpResponse<IPackage[]>>(url, config);

    return response.data;
};

/**
 * # Get prices from a package
 *
 * Get prices by package id.
 *
 * @param id - The id of the package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package}
 */
export const getPricesFromPackage = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.GET_PRICES_FROM_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.get<HttpResponse<IPrice[]>>(url, config);

    return response.data;
};

/**
 * # Update a package
 *
 * Updates a package.
 *
 * @param id - The package id.
 * @param params - The params for updating a package.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/update-a-package}
 */
export const updatePackage = async (
    id: IdType,
    params: IUpdatePackageParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.UPDATE_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.put<HttpResponse<IPackage>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Remove features from a package
 *
 * Remove features from a package.
 *
 * @param id - The package id.
 * @param featureIds - The list of the feature id to remove.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package}
 */
export const removeFeaturesFromPackage = async (
    id: IdType,
    featureIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.REMOVE_FEATURES_FROM_PACKAGE, {
        id,
    });
    const response = await jfwAxios?.delete<HttpResponse<boolean>>(url, {
        params: {
            featureIds,
        },
        paramsSerializer: {
            indexes: true,
        },
        ...config,
    });

    return response.data;
};
