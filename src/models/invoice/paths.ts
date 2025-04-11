const REST = 'invoices';

export const INVOICE_PATH = {
    GET_INVOICES: `${REST}`,
    GET_INVOICE: `${REST}/:id`,
    DELETE_INVOICE: `${REST}/:id`,
    EXPORT_INVOICE: `${REST}/:id/export`,
};
