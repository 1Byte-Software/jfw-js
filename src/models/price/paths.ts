const REST = 'prices';

export const PRICE_PATH = {
    QUERY: `v1/${REST}`,
    CREATE: `v1/${REST}`,
    UPDATE_BY_ID: `v1/${REST}/:id`,
    GET_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `v1/${REST}/:id`,
    DIRECT_CHECKOUT_LINK: `v1/${REST}/:id/direct-checkout-link`,
    GENERATE_CHECKOUT_LINK: `v1/${REST}/:id/generate-checkout-link`,
};
