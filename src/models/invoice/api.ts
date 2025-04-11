import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { INVOICE_PATH } from './paths';
import { IGetInvoicesParams, IInvoice } from './types';

/**
 * Delete an Invoice.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/delete-an-invoice}
 */
export const deleteInvoiceAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.DELETE_INVOICE, {
        id,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get invoices.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices}
 */
export const getInvoicesAPI = async (
    params?: IGetInvoicesParams,
    config?: AxiosRequestConfig,
) => {
    const url = INVOICE_PATH.GET_INVOICES;

    const response = await jfwAxios.get<HttpResponseList<IInvoice>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Get an invoice.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/get-a-invoice}
 */
export const getInvoiceAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.GET_INVOICE, {
        id,
    });

    const response = await jfwAxios.get<HttpResponse<IInvoice>>(url, config);

    return response.data;
};

/**
 * Exports the invoice to pdf by the given id. Returns the file as a download.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/export-a-invoice}
 */
export const exportInvoiceAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.EXPORT_INVOICE, {
        id,
    });
    const response = await jfwAxios.get(url, config);

    return response;
};
