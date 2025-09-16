const REST = 'invoices';

export const INVOICE_PATH = {
    GET_INVOICES: `v1/${REST}`,
    GET_INVOICE: `v1/${REST}/:id`,
    DELETE_INVOICE: `v1/${REST}/:id`,
    DOWNLOAD_INVOICE: `v1/${REST}/{id}/download`,
};
