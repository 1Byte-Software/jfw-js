import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COUPON_PATH } from './paths';
import {
    ICoupon,
    ICreateCouponParams,
    IQueryCouponsParams,
    IUpdateCouponParams,
} from './types';

export const queryCouponAPI = async (
    params: IQueryCouponsParams,
): Promise<HttpResponseList<ICoupon>> => {
    const url = COUPON_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data;
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const getCouponByIdAPI = async (couponId: IdType): Promise<ICoupon> => {
    const url = generatePath(COUPON_PATH.GET_BY_ID, {
        id: couponId,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const createCouponAPI = async (params: ICreateCouponParams) => {
    const url = COUPON_PATH.CREATE;
    const response = await jfwAxios.post(url, params);

    return response.data;
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const updateCouponByIdAPI = async (
    couponId: IdType,
    payload: IUpdateCouponParams,
) => {
    const url = generatePath(COUPON_PATH.UPDATE_BY_ID, {
        id: couponId,
    });
    const response = await jfwAxios.put(url, payload);

    return response.data;
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const deleteCouponByIdAPI = async (couponId: IdType) => {
    const url = generatePath(COUPON_PATH.DELETE_BY_ID, {
        id: couponId,
    });
    const response = await jfwAxios.delete(url);

    return response.data;
};
