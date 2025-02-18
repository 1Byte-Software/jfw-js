import { get, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
import { COUPON_PATH } from './paths';
import {
    ICoupon,
    ICreateCouponParams,
    IQueryCouponsParams,
    IUpdateCouponParams,
} from './types';

export const queryCouponAPI = async (
    params: IQueryCouponsParams,
): Promise<IListResponse<ICoupon>> => {
    const url = `${REST}`;
    const response = await get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const getCouponByIdAPI = async (couponId: IdType): Promise<ICoupon> => {
    const url = generatePath(COUPON_PATH.GET_BY_ID, {
        id: couponId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const createCouponAPI = async (params: ICreateCouponParams) => {
    const url = `${REST}`;
    const response = await post(url, params);

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
    const response = await put(url, payload);

    return response.data;
};

/**
 * #JFW-72: Thiếu tài liệu api/coupons
 */
export const deleteCouponByIdAPI = async (couponId: IdType) => {
    const url = generatePath(COUPON_PATH.DELETE_BY_ID, {
        id: couponId,
    });
    const response = await remove(url);

    return response.data;
};
