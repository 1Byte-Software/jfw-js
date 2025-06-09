import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { INVOICE_PATH } from './paths';
import { IExportInvoice, IGetInvoicesParams, IInvoice } from './types';

/**
 * # Delete an invoice
 *
 * Delete an Invoice.
 *
 * @param id - The id of the invoice.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/delete-an-invoice}
 */
export const deleteInvoice = async (
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
 * # Get invoices
 *
 * Get invoices.
 *
 * @param params - The params for getting invoices.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices}
 */
export const getInvoices = async (
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
 * # Get an invoice
 *
 * Get an invoice.
 *
 * @param id - The id of the invoice.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/get-a-invoice}
 */
export const getInvoice = async (
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
 * # Export an invoice
 *
 * Exports the invoice to pdf by the given id.
 *
 * On success, the browser/download manager receives the file stream:
 *
 * - Content-Type: application/pdf
 * - Content-Disposition: attachment; filename="invoice_12345.pdf"
 *
 * @param id - The id of the invoice.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/export-a-invoice}
 */
export const exportInvoice = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(INVOICE_PATH.EXPORT_INVOICE, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<IExportInvoice>>(
        url,
        config,
    );

    return response.data;
};
