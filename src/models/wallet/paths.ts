const REST = 'wallets';

export const WALLET_PATH = {
    GET: `${REST}`,
    CREATE_DEFAULT: `${REST}/:currencyCode`,
    GET_HISTORY: `${REST}/:id/histories`,
    CONVERT: `${REST}/convert`,
    ADD_MONEY_CHECKOUT_LINK: `${REST}/add-money/checkout-link`,
    APPLY_REDEEM: `${REST}/:walletId/apply-redeem/:redeemCode`,
    CLOSE: `${REST}/:id/close`,
    GET_CONNECTIONS: `v1/${REST}/:userId/connections`,
};
