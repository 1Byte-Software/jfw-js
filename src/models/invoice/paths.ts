const REST = 'invoices';

export const INVOICE_PATH = {
    QUERY: `${REST}`,
    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    EXPORT: `${REST}/:id/export`,
};
