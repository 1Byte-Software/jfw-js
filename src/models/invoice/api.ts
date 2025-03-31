import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { INVOICE_PATH } from './paths';
import { IInvoice, IQueryInvoiceParams } from './types';

export const queryInvoiceAPI = async (
    params?: IQueryInvoiceParams,
    config?: AxiosRequestConfig,
): Promise<IInvoice[]> => {
    const url = INVOICE_PATH.QUERY;
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};

/**
 * Gets a Invoice by the given hashed id.
 */
export const getInvoiceByIdAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.GET_BY_ID, {
        id,
    });

    return await jfwAxios.get(url, config);
};

/**
 * Deletes a Invoice.
 */
export const deleteInvoiceByIdAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.DELETE_BY_ID, {
        id,
    });

    return await jfwAxios.delete(url, config);
};

/**
 * Exports the invoice to pdf by the given id.
 */
export const exportInvoiceAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.EXPORT, {
        id,
    });
    const response = await jfwAxios.get(url, {
        ...config,
        responseType: 'blob',
    });

    return response;
};
