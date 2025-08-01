const REST = 'payments';

export const PAYMENT_PATH = {
    GET_PAYMENT: `v1/${REST}/{id}`,
    GET_PAYMENTS: `v1/${REST}`,
    GET_OVERVIEW_SELL_DASHBOARD: `v1/${REST}/dashboard`,
    GENERATE_PAYMENT_CHECKOUT_LINK: `v1/${REST}/{id}/generate-checkout-link`,
};
