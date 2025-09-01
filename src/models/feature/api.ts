import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IPackage } from '../packages';
import { FEATURE_PATH } from './paths';
import {
    IAddPackageToFeatureParams,
    ICreateFeatureParams,
    IFeature,
    IGetFeaturesParams,
    IUpdateFeatureParams,
} from './types';

export class FeatureAPI {
    /**
     * # Add packages to a feature
     *
     * Add packages to a feature
     *
     * @param featureId - The id of the feature.
     * @param params - The params for adding packages to a feature.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/add-packages-to-a-feature}
     */
    public async addPackagesToFeature(
        featureId: IdType,
        params: IAddPackageToFeatureParams[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(FEATURE_PATH.ADD_PACKAGES_TO_FEATURE, {
            featureId,
        });
        const response = await jfwAxios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Create a feature
     *
     * Creates a new feature.
     *
     * @param params - The params for creating a feature.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/create-a-feature}
     */
    public async createFeature(
        params: ICreateFeatureParams,
        config?: AxiosRequestConfig,
    ) {
        const url = FEATURE_PATH.CREATE_FEATURE;
        const response = await jfwAxios.post<HttpResponse<IFeature>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a feature
     *
     * Deletes a feature by the given id.
     *
     * @param id - The id of the feature to delete.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/delete-a-feature}
     */
    public async deleteFeature(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(FEATURE_PATH.DELETE_FEATURE, {
            id,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get a feature
     *
     * Get a feature by the given id.
     *
     * @param id - The id of the feature to get.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/get-a-feature}
     */
    public async getFeature(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(FEATURE_PATH.GET_FEATURE, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<IFeature>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get features
     *
     * Get features.
     *
     * @param params - The params for getting features.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/get-features}
     */
    public async getFeatures(
        params?: IGetFeaturesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = FEATURE_PATH.GET_FEATURES;
        const response = await jfwAxios.get<HttpResponseList<IFeature>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get packages from a feature
     *
     * Get packages from a feature
     *
     * @param featureId - The id of the feature.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/get-packages-from-feature}
     */
    public async getPackagesFromFeature(
        featureId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(FEATURE_PATH.GET_PACKAGES_FROM_FEATURE, {
            featureId,
        });
        const response = await jfwAxios.get<HttpResponse<IPackage[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Remove packages from a feature
     *
     * Remove packages from a feature
     *
     * @param featureId - The id of the feature.
     * @param params - The params for removing packages from a feature.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/remove-packages-from-a-feature}
     */
    public async removePackagesFromFeature(
        featureId: IdType,
        packageIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(FEATURE_PATH.REMOVE_PACKAGES_FROM_FEATURE, {
            featureId,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(url, {
            params: {
                packageIds,
            },
            paramsSerializer: {
                indexes: true,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Update a feature
     *
     * Updates a feature by the given id.
     *
     * @param id - The id of the feature to update.
     * @param params - The params for updating a feature.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/features/update-a-feature}
     */
    public async updateFeature(
        id: IdType,
        params: IUpdateFeatureParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(FEATURE_PATH.UPDATE_FEATURE, {
            id,
        });
        const response = await jfwAxios.put<HttpResponse<IFeature>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
