import { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PRICE_PATH } from './paths';
import {
    ICreatePriceParams,
    IGenerateCheckoutLinkParams,
    IPrice,
    IQueryPriceParams,
    IUpdatePriceParams,
} from './types';

/**
 * Gets a list of all prices that match the given filter.
 */
export const queryPriceAPI = async (
    params: IQueryPriceParams,
): Promise<IPrice[]> => {
    const url = PRICE_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });
    return response.data;
};

/**
 * Gets a price
 */
export const getPriceByIdAPI = async (priceId: IdType): Promise<IPrice> => {
    const url = generatePath(PRICE_PATH.GET_BY_ID, {
        id: priceId,
    });

    const response = await jfwAxios.get(url);
    return response.data;
};

/**
 * Creates price
 */
export const createPriceAPI = async (payload: ICreatePriceParams) => {
    const url = PRICE_PATH.CREATE;

    const response = await jfwAxios.post(url, payload);
    return response.data;
};

/**
 * Updates a price
 */
export const updatePriceAPI = async (
    priceId: IdType,
    params: IUpdatePriceParams,
) => {
    const url = generatePath(PRICE_PATH.UPDATE_BY_ID, {
        id: priceId,
    });
    const response = await jfwAxios.put(url, params);
    return response.data;
};

/**
 * Deletes a price
 */
export const deletePriceAPI = async (priceId: IdType) => {
    const url = generatePath(PRICE_PATH.DELETE_BY_ID, {
        id: priceId,
    });
    const response = await jfwAxios.delete(url);
    return response.data;
};

/**
 * #JFW-64: Thiếu tài liệu GET: api/prices/:id/generate-checkout-link
 */
export const generateCheckoutLink = async (
    priceId: IdType,
    params: IGenerateCheckoutLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PRICE_PATH.GENERATE_CHECKOUT_LINK, {
        id: priceId,
    });

    const response = await jfwAxios.post(url, null, {
        ...config,
        params,
    });
    return response.data;
};

/**
 * Creates the direct checkout link.
 * @feature Will make in feature
 */
export const createDirectCheckoutLinkAPI = (priceId: IdType) => {
    const url = generatePath(PRICE_PATH.DIRECT_CHECKOUT_LINK, {
        id: priceId,
    });
};
