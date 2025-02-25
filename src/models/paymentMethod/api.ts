import { get, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponse, IdType } from '../base';
import { PAYMENT_METHOD_PATH } from './paths';
import {
    ICreatePaymentMethodParams,
    IPaymentMethod,
    IQueryPaymentMethodParams,
    IUpdatePaymentMethodParams,
} from './types';

/**
 * #VDT-56: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-methods
 */
export const queryPaymentMethodAPI = async (
    params: IQueryPaymentMethodParams,
): Promise<IListResponse<IPaymentMethod>> => {
    const url = PAYMENT_METHOD_PATH.QUERY;
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
 * #VDT-57: Thiếu tài liệu GET: api/payment-methods/:id
 */
export const getPaymentMethodByIdAPI = async (
    paymentMethodId: IdType,
): Promise<IPaymentMethod> => {
    const url = generatePath(PAYMENT_METHOD_PATH.GET_BY_ID, {
        id: paymentMethodId,
    });

    const response = await get(url);

    return response.data;
};

/**
 * #VDT-56: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-methods
 */
export const createPaymentMethodAPI = async (
    params: ICreatePaymentMethodParams,
) => {
    const url = PAYMENT_METHOD_PATH.CREATE;

    return await post(url, params);
};

/**
 * #VDT-56: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-methods
 */
export const updatePaymentMethodAPI = async (
    paymentMethodId: IdType,
    payload: IUpdatePaymentMethodParams,
) => {
    const url = generatePath(PAYMENT_METHOD_PATH.UPDATE_BY_ID, {
        id: paymentMethodId,
    });

    return await put(url, payload);
};

/**
 * #VDT-56: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-methods
 */
export const deletePaymentMethodAPI = async (paymentMethodId: IdType) => {
    const url = generatePath(PAYMENT_METHOD_PATH.DELETE_BY_ID, {
        id: paymentMethodId,
    });

    return await remove(url);
};
