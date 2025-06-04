import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COMMISSION_RATE_PATH } from './paths';
import {
    ICommissionRate,
    ICreateCommissionRateParams,
    IGetCommissionRatesParams,
    IUpdateCommissionRateParams,
} from './types';

/**
 * # Creates a commission rate
 *
 * Create a new commission rate.
 *
 * @param params - The params for creating an commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/create-a-commission-rate}
 */
export const createCommissionRate = async (
    params?: ICreateCommissionRateParams,
    config?: AxiosRequestConfig,
) => {
    const url = COMMISSION_RATE_PATH.CREATE_COMMISSION_RATE;
    const response = await jfwAxios.post<HttpResponse<ICommissionRate>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Deletes a commission rate
 *
 * Delete a commission rate by id.
 *
 * @param id - The id of the commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/delete-a-commission-rate}
 */
export const deleteCommissionRate = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(COMMISSION_RATE_PATH.DELETE_COMMISSION_RATE, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Gets a commission rate
 *
 * Gets a commission rate by id.
 *
 * @param id - The id of the commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-a-commission-rate}
 */
export const getCommissionRate = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(COMMISSION_RATE_PATH.GET_COMMISSION_RATE, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<ICommissionRate>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Gets discount value
 *
 * Gets the discount value based on the quantity.
 *
 * This endpoint is used to get the discount value based on the quantity.
 *
 * The discount value is calculated based on the commission rate that is set for the user.
 *
 * @param quantity - (int32) The quantity value to check the discount value result.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-discount-value}
 */
export const getDiscountValue = async (
    quantity: number,
    config?: AxiosRequestConfig,
) => {
    const url = COMMISSION_RATE_PATH.GET_DISCOUNT_VALUE;
    const response = await jfwAxios.get<HttpResponse<number>>(url, {
        params: {
            quantity,
        },
        ...config,
    });

    return response.data;
};

/**
 * # Get commission rates
 *
 * Get commission rates
 *
 * @param params - The parameters for getting all commission rates.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-commission-rates}
 */
export const getCommissionRatesAPI = async (
    params?: IGetCommissionRatesParams,
    config?: AxiosRequestConfig,
) => {
    const url = COMMISSION_RATE_PATH.GET_COMMISSION_RATES;
    const response = await jfwAxios.get<HttpResponse<ICommissionRate[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Updates a commission rate
 *
 * Update a commission rate.
 *
 * @param id - The id of the commission rate.
 * @param params - The params for updating a commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/update-a-commission-rate}
 */
export const updateCommissionRate = async (
    id: IdType,
    params?: IUpdateCommissionRateParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(COMMISSION_RATE_PATH.UPDATE_COMMISSION_RATE, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};
