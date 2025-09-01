import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PRICE_PATH } from './paths';
import {
    ICreatePriceParams,
    IGenerateCheckoutLinkParams,
    IGetPricesParams,
    IPrice,
    IUpdatePriceParams,
} from './types';

export class PriceAPI {
    /**
     * # Create a price
     *
     * Create a price.
     *
     * @param params - The params for creating a price.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/create-a-price}
     */
    public async createPrice(
        params: ICreatePriceParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PRICE_PATH.CREATE_PRICE;
        const response = await jfwAxios.post<HttpResponse<IPrice>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a price
     *
     * Deletes a price by the given id.
     *
     * @param id - The id of the price.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/delete-a-price}
     */
    public async deletePrice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PRICE_PATH.DELETE_PRICE, {
            id,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Generate checkout link
     *
     * Generate a direct checkout link for the price with the given id.
     *
     * Returns a checkout link that allows the user to place an order.
     *
     * After a successful checkout, JFW will redirect the user to the return URL configured in the app integration payment gateway management.
     *
     * A license will be sent to the purchaser's email, which can be used to apply the license and upgrade the user's package.
     *
     * @param params - The params for generating checkout link
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link}
     */
    public async generateCheckoutLink(
        params: IGenerateCheckoutLinkParams,
        config?: AxiosRequestConfig,
    ) {
        const { priceId, appIntegrationId } = params;
        const url = generatePath(PRICE_PATH.GENERATE_CHECKOUT_LINK, {
            priceId,
        });
        const response = await jfwAxios.post<HttpResponse<string>>(url, null, {
            params: {
                appIntegrationId,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Get a price
     *
     * Gets a price.
     *
     * @param id - The id of the price.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/get-a-price}
     */
    public async getPrice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PRICE_PATH.GET_PRICE, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<IPrice>>(url, config);

        return response.data;
    }

    /**
     * # Get prices
     *
     * Get prices.
     *
     * @param params - The params for getting prices.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/get-prices}
     */
    public async getPrices(
        params?: IGetPricesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PRICE_PATH.GET_PRICES;
        const response = await jfwAxios.get<HttpResponse<IPrice[]>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Update a price
     *
     * Updates a price by the given id.
     *
     * @param id - The id of the price.
     * @param params - The params for updating a price.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/update-a-price}
     */
    public async updatePrice(
        id: IdType,
        params: IUpdatePriceParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PRICE_PATH.UPDATE_PRICE, {
            id,
        });
        const response = await jfwAxios.put<HttpResponse<IPrice>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
