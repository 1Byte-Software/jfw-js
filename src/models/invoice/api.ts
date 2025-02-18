import { RawAxiosRequestHeaders } from 'axios';
import { get, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { INVOICE_PATH } from './paths';
import { IInvoice, IQueryInvoiceParams } from './types';

export const queryInvoiceAPI = async (
    params?: IQueryInvoiceParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IInvoice[]> => {
    const url = `${REST}`;
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

/**
 * Gets a Invoice by the given hashed id.
 */
export const getInvoiceByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(INVOICE_PATH.GET_BY_ID, {
        id,
    });

    return await get(url, null, userHeaders);
};

/**
 * Deletes a Invoice.
 */
export const deleteInvoiceByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(INVOICE_PATH.DELETE_BY_ID, {
        id,
    });

    return await remove(url, userHeaders);
};

/**
 * Exports the invoice to pdf by the given id.
 */
export const exportInvoiceAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(INVOICE_PATH.EXPORT, {
        id,
    });
    const response = await get(
        url,
        {
            responseType: 'blob',
        },
        userHeaders,
    );

    return response;
};
