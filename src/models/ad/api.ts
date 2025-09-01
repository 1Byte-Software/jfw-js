import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { AdPosition } from './constants';
import { AD_PATH } from './paths';
import { IAd, ICreateAdParams, IGetAdsParams, IUpdateAdParams } from './types';

export class AdAPI extends AbstractAPI {
    /**
     * # Activate an ad
     *
     * Activate an ad.
     *
     * @param id - The id of the ads to activate.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/activate-an-ad}
     */
    public async activateAd(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(AD_PATH.ACTIVATE_AD, {
            id,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Deactivate an ad
     *
     * Deactivate an ad
     *
     * @param id - The id of the ads to deactivate.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/deactivate-an-ad}
     */
    public async deactivateAd(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(AD_PATH.DEACTIVATE_AD, {
            id,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Creates an ad
     *
     * Create an ad.
     *
     * @param params - The params for creating an ad.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/create-an-ad}
     */
    public async createAd(
        params: ICreateAdParams,
        config?: AxiosRequestConfig,
    ) {
        const url = AD_PATH.CREATE_AD;
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Deletes an ad
     *
     * Deletes an ad
     *
     * @param id - The id of the ad.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/delete-an-ad}
     */
    public async deleteAd(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(AD_PATH.DELETE_AD, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Gets ads client view
     *
     * Get ads with the client view.
     *
     * @param position - The position for getting ads with the client view.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/get-ads-client-view}
     */
    public async getAdsClientView(
        position: AdPosition,
        config?: AxiosRequestConfig,
    ) {
        const url = AD_PATH.GET_ADS_WITH_CLIENT_VIEW;

        const response = await this.axios.get<HttpResponse<IAd[]>>(url, {
            params: {
                position,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Gets ads
     *
     * Get ads.
     *
     * @param params - The params for getting ads.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/get-ads}
     */
    public async getAds(params?: IGetAdsParams, config?: AxiosRequestConfig) {
        const url = AD_PATH.GET_ADS;
        const response = await this.axios.get<HttpResponseList<IAd>>(url, {
            ...config,
            params,
        });

        return response.data;
    }

    /**
     * # Gets an ad
     *
     * Get an ad.
     *
     * @param id - The id of the ad.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/get-an-ad}
     */
    public async getAd(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(AD_PATH.GET_AD, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IAd>>(url, config);

        return response.data;
    }

    /**
     * # Updates an ad
     *
     * Update an ad
     *
     * @param params - The params for updating an ad.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/ads/update-an-ad}
     */
    public async updateAd(
        params: IUpdateAdParams,
        config?: AxiosRequestConfig,
    ) {
        const { id, ...bodyParams } = params;
        const url = generatePath(AD_PATH.UPDATE_AD, {
            id,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            bodyParams,
            config,
        );

        return response.data;
    }
}
