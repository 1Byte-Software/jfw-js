const REST = 'payment-providers';

export const PAYMENT_PROVIDER_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,
    UPDATE_BY_ID: `${REST}/:id`,
    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,
};
