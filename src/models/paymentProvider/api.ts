import { HttpResponseList } from '../../core';
import { get, post, put, remove } from '../../utils/axiosHelper222';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PAYMENT_PROVIDER_PATH } from './paths';
import {
    ICreatePaymentProviderParams,
    IPaymentProvider,
    IQueryPaymentProviderParams,
    IUpdatePaymentProviderParams,
} from './types';

/**
 * #VDT-61: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-providers
 */
export const queryPaymentProviderAPI = async (
    params?: IQueryPaymentProviderParams,
): Promise<HttpResponseList<IPaymentProvider>> => {
    const url = PAYMENT_PROVIDER_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    return response.data
};

/**
 * #VDT-62: Thiếu tài liệu GET: api/payment-providers/:id
 */
export const getPaymentProviderByIdAPI = async (
    paymentProviderId: IdType,
): Promise<IPaymentProvider> => {
    const url = generatePath(PAYMENT_PROVIDER_PATH.GET_BY_ID, {
        id: paymentProviderId,
    });

    const response = await get(url);

    return response.data;
};

/**
 * #VDT-61: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-providers
 */
export const createPaymentProviderAPI = async (
    params: ICreatePaymentProviderParams,
) => {
    const url = PAYMENT_PROVIDER_PATH.CREATE;

    return await post(url, params);
};

/**
 * #VDT-61: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-providers
 */
export const updatePaymentProviderAPI = async (
    paymentProviderId: IdType,
    payload: IUpdatePaymentProviderParams,
) => {
    const url = generatePath(PAYMENT_PROVIDER_PATH.UPDATE_BY_ID, {
        id: paymentProviderId,
    });

    return await put(url, payload);
};

/**
 * #VDT-61: Thiếu tài liệu GET, POST, PUT, DELETE: api/payment-providers
 */
export const deletePaymentProviderAPI = async (paymentProviderId: IdType) => {
    const url = generatePath(PAYMENT_PROVIDER_PATH.DELETE_BY_ID, {
        id: paymentProviderId,
    });

    return await remove(url);
};
