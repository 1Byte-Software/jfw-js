import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PACKAGE_PATH } from './paths';
import {
    IAddFeaturesToPackageData,
    ICreatePackageData,
    IGetPackagesParams,
    IGetPricesFromPackageParams,
    IPackage,
    IUpdatePackageData,
} from './types';

/**
 * Add features to a package.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package}
 */
export const addFeaturesToPackageAPI = async (
    packageId: IdType,
    data: IAddFeaturesToPackageData[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.ADD_FEATURE_TO_PACKAGE, {
        id: packageId,
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
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package}
 */
export const getPackageByIdAPI = async (id: IdType): Promise<IPackage> => {
    const url = generatePath(PACKAGE_PATH.GET_PACKAGE, {
        id,
    });

    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * Get packages
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages}
 */
export const getPackagesAPI = async (
    params?: IGetPackagesParams,
    config?: AxiosRequestConfig,
) => {
    const url = PACKAGE_PATH.GET_PACKAGES;

    const response = await jfwAxios.get<HttpResponse<IPackage[]>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Get prices by package id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package}
 */
export const getPricesFromPackageAPI = async (
    params?: IGetPricesFromPackageParams,
    config?: AxiosRequestConfig,
) => {
    const { packageId } = params;

    const url = generatePath(PACKAGE_PATH.GET_PRICES_FROM_PACKAGE, {
        id: packageId,
    });

    const response = await jfwAxios.get<HttpResponse<IPackage[]>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Updates a package.
 *
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
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package}
 */
export const deleteFeaturesFromPackageAPI = async (
    packageId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PACKAGE_PATH.REMOVE_FEATURES_FROM_PACKAGE, {
        id: packageId,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};
