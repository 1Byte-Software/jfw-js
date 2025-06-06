const REST = 'wallets';

export const WALLET_PATH = {
    ADD_MONEY_TO_WALLET_WITH_CHECKOUT_LINK: `v1/${REST}/add-money/checkout-link`,
    APPLY_REDEEM_CODE: `v1/${REST}/:walletId/apply-redeem/{redeemCode}`,
    CREATE_WALLET_DEFAULT: `v1/${REST}/{currencyCode}`,
    CONVERT_WALLET_MONEY: `v1/${REST}/convert`,
    CLOSE_WALLET: `v1/${REST}/{id}/close`,
    GET_WALLETS: `v1/${REST}`,
    GET_WALLET_HISTORIES: `v1/${REST}/{id}/histories`,
};
