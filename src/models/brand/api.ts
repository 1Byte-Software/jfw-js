import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { BRAND_PATH } from './paths';
import { IBrand, IGetQueryBrandParams, IUpdateBrandParams } from './types';

/**
 * List all brands.
 */
export const queryBrandAPI = async (
    params?: IGetQueryBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponseList<IBrand>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Gets brand by the given brand url.
 */
export const getBrandByUrlAPI = async (
    brandUrl: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.GET_BY_URL, {
        brandUrl,
    });

    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

/**
 * Gets brand by the given brand id.
 */
export const getBrandByIdAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

export const updateBrandAPI = async (
    id: IdType,
    payload: IUpdateBrandParams,
) => {
    const url = generatePath(BRAND_PATH.UPDATE_BY_ID, {
        id,
    });

    // #NOT_SURE: HttpResponse<null>
    const response = await jfwAxios.put<HttpResponse<null>>(url, payload);

    return response.data;
};
