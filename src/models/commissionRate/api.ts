import { get, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COMMISSION_RATE_PATH } from './paths';
import {
    ICommissionRate,
    ICreateCommissionRateParams,
    IGetDiscountCommissionDiscountParams,
    IQueryCommissionRatesParams,
    IUpdateCommissionRateParams,
} from './types';

/**
 * #JFW-83: Thiếu tài liệu api/conmission-rates
 */
export const queryCommissionRateAPI = async (
    params?: IQueryCommissionRatesParams,
): Promise<ICommissionRate[]> => {
    const url = COMMISSION_RATE_PATH.QUERY;

    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * #JFW-83: Thiếu tài liệu api/conmission-rates
 */
export const getCommissionDiscountAPI = async (
    params?: IGetDiscountCommissionDiscountParams,
): Promise<number> => {
    const url = `${REST}/get-discount`;

    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * #JFW-83: Thiếu tài liệu api/conmission-rates
 */
export const getCommissionRateByIdAPI = async (
    commissionRateId: IdType,
): Promise<ICommissionRate> => {
    const url = generatePath(COMMISSION_RATE_PATH.GET_BY_ID, {
        id: commissionRateId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * #JFW-83: Thiếu tài liệu api/conmission-rates
 */
export const createCommissionRateAPI = async (
    params?: ICreateCommissionRateParams,
) => {
    const url = COMMISSION_RATE_PATH.CREATE;
    const response = await post(url, params);

    return response.data;
};

/**
 * #JFW-83: Thiếu tài liệu api/conmission-rates
 */
export const updateCommissionRateByIdAPI = async (
    commissionRateId: IdType,
    params?: IUpdateCommissionRateParams,
) => {
    const url = generatePath(COMMISSION_RATE_PATH.UPDATE_BY_ID, {
        id: commissionRateId,
    });
    const response = await put(url, params);

    return response.data;
};

/**
 * #JFW-83: Thiếu tài liệu api/conmission-rates
 */
export const deleteCommissionRateByIdAPI = async (commissionRateId: IdType) => {
    const url = generatePath(COMMISSION_RATE_PATH.DELETE_BY_ID, {
        id: commissionRateId,
    });

    const response = await remove(url);

    return response.data;
};
