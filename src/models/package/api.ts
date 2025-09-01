import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { IPrice } from '../price';
import { PACKAGE_PATH } from './paths';
import {
    IAddFeatureToPackageParams,
    ICalculateTotalPriceCheckoutParams,
    ICalculateTotalPriceCheckoutResponse,
    ICreatePackageParams,
    IFeatureOfPackage,
    IGetPackagesParams,
    IPackage,
    IRenewalOrUpgradeUserPackageParams,
    IRenewalOrUpgradeUserPackageResponse,
    IUpdatePackageFeatureDataParams,
    IUpdatePackageFeatureDataPathParams,
    IUpdatePackageParams,
} from './types';

export class PackageAPI extends AbstractAPI {
    /**
     * # Add features to a package
     *
     * Add features to a package.
     *
     * @param packageId - The package id.
     * @param params - The params for adding features to a package.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/add-features-to-a-package}
     */
    public async addFeaturesToPackage(
        packageId: IdType,
        params: IAddFeatureToPackageParams[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PACKAGE_PATH.ADD_FEATURE_TO_PACKAGE, {
            packageId,
        });
        const response = await jfwAxios?.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Calculate total price checkout
     *
     * Calculate the total price of a package at checkout.
     *
     * This method is used to calculate the total price of a package at checkout based on the provided package ID and the request data.
     * It takes into account the wallet used, refund amount, prorate amount, subtotal, tax, and total price to be paid.
     *
     * @param params - The params for calculating total price checkout.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/calculate-total-price-checkout}
     */
    public async calculateTotalPriceCheckout(
        params: ICalculateTotalPriceCheckoutParams,
        config?: AxiosRequestConfig,
    ) {
        const { packageId, ...searchParams } = params;

        const url = generatePath(PACKAGE_PATH.CALCULATE_TOTAL_PRICE_CHECKOUT, {
            packageId,
        });
        const response = await jfwAxios?.post<
            HttpResponse<ICalculateTotalPriceCheckoutResponse>
        >(url, params, {
            params: searchParams,
            ...config,
        });

        return response.data;
    }

    /**
     * # Create a package
     *
     * Creates a new package.
     *
     * @param params - The params for creating a new package.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/create-a-package}
     */
    public async createPackage(
        params: ICreatePackageParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PACKAGE_PATH.CREATE_PACKAGE;
        const response = await jfwAxios?.post<HttpResponse<IPackage>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a package
     *
     * Deletes a package.
     *
     * @param id - The id of the package to delete.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/delete-a-package}
     */
    public async deletePackage(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PACKAGE_PATH.DELETE_PACKAGE, {
            id,
        });
        const response = await jfwAxios?.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get a package
     *
     * Gets a package
     *
     * @param id - The package id.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-a-package}
     */
    public async getPackage(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PACKAGE_PATH.GET_PACKAGE, {
            id,
        });
        const response = await jfwAxios?.get<HttpResponse<IPackage>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get features from a package
     *
     * Get features from a package
     *
     * @param packageId - The id of the package.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-features-from-package}
     */
    public async getFeaturesFromPackage(
        packageId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PACKAGE_PATH.GET_FEATURES_FROM_PACKAGE, {
            packageId,
        });
        const response = await jfwAxios?.get<HttpResponse<IFeatureOfPackage[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get packages
     *
     * Get packages
     *
     * @param params - The params for getting packages.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-packages}
     */
    public async getPackages(
        params?: IGetPackagesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PACKAGE_PATH.GET_PACKAGES;
        const response = await jfwAxios?.get<HttpResponse<IPackage[]>>(url, {
            params: params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get prices from a package
     *
     * Get prices by package id.
     *
     * @param packageId - The id of the package.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/get-prices-from-a-package}
     */
    public async getPricesFromPackage(
        packageId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PACKAGE_PATH.GET_PRICES_FROM_PACKAGE, {
            packageId,
        });
        const response = await jfwAxios?.get<HttpResponse<IPrice[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Remove features from a package
     *
     * Remove features from a package.
     *
     * @param packageId - The package id.
     * @param featureIds - The list of the feature id to remove.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/remove-features-from-a-package}
     */
    public async removeFeaturesFromPackage(
        packageId: IdType,
        featureIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PACKAGE_PATH.REMOVE_FEATURES_FROM_PACKAGE, {
            packageId,
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
    }

    /**
     * # Renewal or upgrade user's package
     *
     * Renewal or upgrade user's package.
     *
     * @param params - The params for renewal or upgrade user's package
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/renewal-or-upgrade-user-package}
     */
    public async renewalOrUpgradeUserPackage(
        params: IRenewalOrUpgradeUserPackageParams,
        config?: AxiosRequestConfig,
    ) {
        const { packageId, ...searchParams } = params;

        const url = generatePath(PACKAGE_PATH.RENEWAL_OR_UPGRADE_USER_PACKAGE, {
            packageId,
        });
        const response = await jfwAxios?.post<
            HttpResponse<IRenewalOrUpgradeUserPackageResponse>
        >(url, searchParams, config);

        return response.data;
    }

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
    public async updatePackage(
        id: IdType,
        params: IUpdatePackageParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PACKAGE_PATH.UPDATE_PACKAGE, {
            id,
        });
        const response = await jfwAxios?.put<HttpResponse<IPackage>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Update package feature data
     *
     * Update the package feature data
     *
     * @param pathParams - The path params for updating package feature data.
     * @param params - The params for updating a package.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/packages/update-package-feature-data}
     */
    public async updatePackageFeatureData(
        pathParams: IUpdatePackageFeatureDataPathParams,
        params: IUpdatePackageFeatureDataParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            PACKAGE_PATH.UPDATE_PACKAGE_FEATURE_DATA,
            pathParams,
        );
        const response = await jfwAxios?.put<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
