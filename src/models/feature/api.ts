import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { FEATURE_PATH } from './paths';
import {
    ICreateFeatureData,
    IFeature,
    IGetFeaturesParams,
    IUpdateFeatureData,
} from './types';
import { IPackage } from '../packages';

/**
 * Creates a new feature.
 *
 * @param data - The data for creating a feature.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/create-a-feature}
 */
export const createFeatureAPI = async (
    data: ICreateFeatureData,
    config?: AxiosRequestConfig,
) => {
    const url = FEATURE_PATH.CREATE_FEATURE;

    const response = await jfwAxios.post<HttpResponse<IFeature>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes a feature by the given id.
 *
 * @param id - The id of the feature to delete.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/delete-a-feature}
 */
export const deleteFeatureAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(FEATURE_PATH.DELETE_FEATURE, {
        id,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get a feature by the given id.
 *
 * @param id - The id of the feature to get.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/get-a-feature}
 */
export const getFeatureAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(FEATURE_PATH.GET_FEATURE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IFeature>>(url, config);

    return response.data;
};

/**
 * Get features.
 *
 * @param params - The parameters for getting features.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/get-features}
 */
export const getFeaturesAPI = async (
    params?: IGetFeaturesParams,
    config?: AxiosRequestConfig,
) => {
    const url = FEATURE_PATH.GET_FEATURES;
    const response = await jfwAxios.get<HttpResponseList<IFeature>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Updates a feature by the given id.
 *
 * @param id - The id of the feature to update.
 * @param data - The data for updating a feature.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/update-a-feature}
 */
export const updateFeatureAPI = async (
    id: IdType,
    data: IUpdateFeatureData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(FEATURE_PATH.UPDATE_FEATURE, {
        id,
    });
    const response = await jfwAxios.patch<HttpResponse<IFeature>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Will update in feature.
 */
export const getPackagesByFeatureAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(FEATURE_PATH.GET_PACKAGES_BY_FEATURE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IPackage[]>>(url, config);

    return response.data;
};
