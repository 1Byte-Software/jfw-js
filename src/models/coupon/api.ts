import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COUPON_PATH } from './paths';
import {
    ICoupon,
    ICreateCouponData,
    IGetCouponsParams,
    IUpdateCouponData,
} from './types';

/**
 * Creates a new coupon.
 *
 * @param data - The data for creating a coupon.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/create-a-coupon}
 */
export const createCouponAPI = async (
    data: ICreateCouponData,
    config?: AxiosRequestConfig,
) => {
    const url = COUPON_PATH.CREATE_COUPON;
    const response = await jfwAxios.post<HttpResponse<ICoupon>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes a coupon by the given id.
 *
 * @param id - The id for deleting a coupon.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/delete-a-coupon}
 */
export const deleteCouponAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(COUPON_PATH.DELETE_COUPON, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Gets a coupon by the given id.
 *
 * @param id - The id of the coupon.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/get-a-coupon}
 */
export const getCouponAPI = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(COUPON_PATH.GET_COUPON, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<ICoupon>>(url, config);

    return response.data;
};

/**
 * Get coupons
 *
 * @param params - The parameters for getting coupons.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/get-coupons}
 */
export const getCouponsAPI = async (
    params: IGetCouponsParams,
    config?: AxiosRequestConfig,
) => {
    const url = COUPON_PATH.GET_COUPONS;
    const response = await jfwAxios.get<HttpResponseList<ICoupon>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Updates a coupon by the given id.
 *
 * @param id - The id of the coupon.
 * @param data - The data for updating a coupon.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/update-a-coupon}
 */
export const updateCouponAPI = async (
    id: IdType,
    data: IUpdateCouponData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(COUPON_PATH.UPDATE_COUPON, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<ICoupon>>(
        url,
        data,
        config,
    );

    return response.data;
};
