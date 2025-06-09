const REST = 'prices';

export const PRICE_PATH = {
    CREATE_PRICE: `v1/${REST}`,
    DELETE_PRICE: `v1/${REST}/{id}`,
    GENERATE_CHECKOUT_LINK: `v1/${REST}/{id}/checkout-link`,
    GET_PRICE: `v1/${REST}/{id}`,
    GET_PRICES: `v1/${REST}`,
    UPDATE_PRICE: `v1/${REST}/{id}`,
};
