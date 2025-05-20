const REST = 'invoices';

export const INVOICE_PATH = {
    GET_INVOICES: `v1/${REST}`,
    GET_INVOICE: `v1/${REST}/:id`,
    DELETE_INVOICE: `v1/${REST}/:id`,
    EXPORT_INVOICE: `v1/${REST}/:id/export`,
};
