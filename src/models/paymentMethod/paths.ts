const REST = 'payment-methods';

export const PAYMENT_METHOD_PATH = {
    QUERY: `v1/${REST}`,
    CREATE: `v1/${REST}`,
    UPDATE_BY_ID: `v1/${REST}/:id`,
    GET_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `v1/${REST}/:id`,
};
