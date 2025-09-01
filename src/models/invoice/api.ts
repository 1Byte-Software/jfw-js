import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { INVOICE_PATH } from './paths';
import { IGetInvoicesParams, IInvoice } from './types';

export class InvoiceAPI {
    /**
     * # Delete an invoice
     *
     * Delete an Invoice.
     *
     * @param id - The id of the invoice.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/delete-an-invoice}
     */
    public async deleteInvoice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(INVOICE_PATH.DELETE_INVOICE, {
            id,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get invoices
     *
     * Get invoices.
     *
     * @param params - The params for getting invoices.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/get-invoices}
     */
    public async getInvoices(
        params?: IGetInvoicesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = INVOICE_PATH.GET_INVOICES;
        const response = await jfwAxios.get<HttpResponseList<IInvoice>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get an invoice
     *
     * Get an invoice.
     *
     * @param id - The id of the invoice.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/invoices/get-a-invoice}
     */
    public async getInvoice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(INVOICE_PATH.GET_INVOICE, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<IInvoice>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * #NOTE: Will update doc in future.
     */
    public async downloadInvoice(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(INVOICE_PATH.DOWNLOAD_INVOICE, {
            id,
        });
        const response = await jfwAxios.post<Blob>(url, null, config);

        return response.data;
    }
}
