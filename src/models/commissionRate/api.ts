import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COMMISSION_RATE_PATH } from './paths';
import {
    ICommissionRate,
    ICreateCommissionRateData,
    IGetCommissionRatesParams,
    IGetDiscountCommissionDiscountParams,
    IUpdateCommissionRateData,
} from './types';

/**
 * Create a new commission rate.
 *
 * @param data - The data for creating an commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/create-a-commission-rate}
 */
export const createCommissionRateAPI = async (
    data?: ICreateCommissionRateData,
    config?: AxiosRequestConfig,
) => {
    const url = COMMISSION_RATE_PATH.CREATE_COMMISSION_RATE;

    const response = await jfwAxios.post<HttpResponse<ICommissionRate>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Delete a commission rate by id.
 *
 * @param id - The id for deleting a commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/delete-a-commission-rate}
 */
export const deleteCommissionRateAPI = async (
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
 * Gets a commission rate by id.
 *
 * @param id - The id of the commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-a-commission-rate}
 */
export const getCommissionRateAPI = async (
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
 * Gets the discount value based on the quantity.
 *
 * @param params - The parameters for getting discount.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/get-discount-value}
 */
export const getCommissionDiscountAPI = async (
    params?: IGetDiscountCommissionDiscountParams,
    config?: AxiosRequestConfig,
) => {
    const url = COMMISSION_RATE_PATH.GET_DISCOUNT_VALUE;

    const response = await jfwAxios.get<HttpResponse<number>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * List all commission rates.
 *
 * @param params - The parameters for getting all commission rates.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/list-commission-rates}
 * #JFW-283
 */
export const getCommissionRatesAPI = async (
    params?: IGetCommissionRatesParams,
    config?: AxiosRequestConfig,
) => {
    const url = COMMISSION_RATE_PATH.GET_COMMISSION_RATES;
    const response = await jfwAxios.get<HttpResponse<ICommissionRate[]>>(url, {
        params,
        ...config
    });

    return response.data;
};

/**
 * Update a commission rate.
 *
 * @param id - The id of the commission rate.
 * @param data - The data for updating a commission rate.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/commission-rates/update-a-commission-rate}
 */
export const updateCommissionRateAPI = async (
    id: IdType,
    data?: IUpdateCommissionRateData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(COMMISSION_RATE_PATH.UPDATE_COMMISSION_RATE, {
        id,
    });

    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};
