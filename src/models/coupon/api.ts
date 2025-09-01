import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COUPON_PATH } from './paths';
import {
    ICoupon,
    ICreateCouponParams,
    IGetCouponsParams,
    IUpdateCouponParams,
} from './types';

export class CouponAPI {
    /**
     * # Create a Coupon
     *
     * Creates a new coupon.
     *
     * @param params - The params for creating a coupon.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/create-a-coupon}
     */
    public async createCoupon(
        params: ICreateCouponParams,
        config?: AxiosRequestConfig,
    ) {
        const url = COUPON_PATH.CREATE_COUPON;
        const response = await jfwAxios.post<HttpResponse<ICoupon>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a Coupon
     *
     * Deletes a coupon by the given id.
     *
     * @param id - The id of the coupon.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/delete-a-coupon}
     */
    public async deleteCoupon(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(COUPON_PATH.DELETE_COUPON, {
            id,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * Get a Coupon
     *
     * Gets a coupon by the given id.
     *
     * @param id - The id of the coupon.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/get-a-coupon}
     */
    public async getCoupon(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(COUPON_PATH.GET_COUPON, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<ICoupon>>(url, config);

        return response.data;
    }

    /**
     * # Get Coupons
     *
     * Get coupons
     *
     * @param params - The params for getting coupons.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/get-coupons}
     */
    public async getCoupons(
        params: IGetCouponsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = COUPON_PATH.GET_COUPONS;
        const response = await jfwAxios.get<HttpResponseList<ICoupon>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Update a Coupon
     *
     * Updates a coupon by the given id.
     *
     * @param id - The id of the coupon.
     * @param params - The params for updating a coupon.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/coupons/update-a-coupon}
     */
    public async updateCoupon(
        id: IdType,
        params: IUpdateCouponParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(COUPON_PATH.UPDATE_COUPON, {
            id,
        });
        const response = await jfwAxios.put<HttpResponse<ICoupon>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
