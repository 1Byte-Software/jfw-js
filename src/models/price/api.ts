import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PRICE_PATH } from './paths';
import {
    ICreatePriceParams,
    IGetPricesParams,
    IPrice,
    IUpdatePriceParams,
} from './types';

/**
 * # Create a price
 *
 * Create a price.
 *
 * @param params - The params for creating a price.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/create-a-price}
 */
export const createPrice = async (
    params: ICreatePriceParams,
    config?: AxiosRequestConfig,
) => {
    const url = PRICE_PATH.CREATE_PRICE;
    const response = await jfwAxios.post<HttpResponse<IPrice>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete a price
 *
 * Deletes a price by the given id.
 *
 * @param id - The id of the price.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/delete-a-price}
 */
export const deletePrice = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(PRICE_PATH.DELETE_PRICE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Generate checkout link
 *
 * Gets the checkout link for the price with the given id.
 *
 * @param id - The id of the price.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/generate-checkout-link}
 */
export const generateCheckoutLink = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PRICE_PATH.GENERATE_CHECKOUT_LINK, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<string>>(url, config);

    return response.data;
};

/**
 * # Get a price
 *
 * Gets a price.
 *
 * @param id - The id of the price.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/get-a-price}
 */
export const getPrice = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(PRICE_PATH.GET_PRICE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IPrice>>(url, config);

    return response.data;
};

/**
 * # Get prices
 *
 * Get prices.
 *
 * @param params - The params for getting prices.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/prices/get-prices}
 */
export const getPrices = async (
    params?: IGetPricesParams,
    config?: AxiosRequestConfig,
) => {
    const url = PRICE_PATH.GET_PRICES;
    const response = await jfwAxios.get<HttpResponse<IPrice[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

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
export const updatePrice = async (
    id: IdType,
    params: IUpdatePriceParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PRICE_PATH.UPDATE_PRICE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<IPrice>>(
        url,
        params,
        config,
    );

    return response.data;
};
