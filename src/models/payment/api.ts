import { IStatistic, IStatisticCommonParams } from '../../core';
import { get } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType, IListResponse } from '../base';
import { PAYMENT_PATH } from './paths';
import {
    IGetPaymentDashboardParams,
    IPayment,
    IPaymentDashboard,
    IQueryPaymentParams,
} from './types';

/**
 * Get payments
 */
export const queryPaymentHistoryAPI = async (
    params: IQueryPaymentParams,
): Promise<IListResponse<IPayment>> => {
    const url = PAYMENT_PATH.QUERY;
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
 * Gets a payment
 */
export const getPaymentByIdAPI = async (
    paymentId: IdType,
): Promise<IPayment> => {
    const url = generatePath(PAYMENT_PATH.GET_BY_ID, {
        id: paymentId,
    });

    const response = await get(url);

    return response.data;
};

/**
 * Gets the overview Sell Dashboard.
 */
export const getPaymentDashboardAPI = async (
    params: IGetPaymentDashboardParams,
): Promise<IPaymentDashboard> => {
    const url = PAYMENT_PATH.GET_DASHBOARD;
    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 *  #JFW-59: Thiếu tài liệu GET: api/payments/statistics
 */
export const getPaymentStatisticAPI = async (
    params: IStatisticCommonParams,
): Promise<IStatistic[]> => {
    const url = PAYMENT_PATH.GET_STATISTIC;
    const response = await get(url, {
        params,
    });

    return response.data;
};
