const REST = 'wallets';

export const WALLET_PATH = {
    GET: `v1/${REST}`,
    CREATE_DEFAULT: `v1/${REST}/:currencyCode`,
    GET_HISTORY: `v1/${REST}/:id/histories`,
    CONVERT: `v1/${REST}/convert`,
    ADD_MONEY_CHECKOUT_LINK: `v1/${REST}/add-money/checkout-link`,
    APPLY_REDEEM: `v1/${REST}/:walletId/apply-redeem/:redeemCode`,
    CLOSE: `v1/${REST}/:id/close`,
    GET_CONNECTIONS: `v1/${REST}/:userId/connections`,
};
