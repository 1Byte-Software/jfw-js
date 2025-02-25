const REST = 'prices';

export const PRICE_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,
    UPDATE_BY_ID: `${REST}/:id`,
    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,
    DIRECT_CHECKOUT_LINK: `${REST}/:id/direct-checkout-link`,
    GENERATE_CHECKOUT_LINK: `${REST}/:id/generate-checkout-link`,
};
