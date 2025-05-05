const REST = 'licenses';
const REST_PURCHASE = 'purchase';
const REST_STATISTIC = 'statistics';

export const LICENSE_PATH = {
    GET: `${REST}`,
    CREATE: `v1/${REST}`,
    GENERATE_LICENSE_KEY: `${REST}/generate-key`,
    CHECK: `v1/${REST}/check`,
    APPLY_TO_LOGGED_USER: `v1/${REST}/apply`,
    APPLY_TO_LOGIN_NAME: `v1/${REST}/apply-to-login-name`,
    APPLY_TO_GIVEN_USER: `v1/${REST}/apply-to-user`,
    COUNT_LICENSES_CREATED: `v1/${REST}/count`,

    GET_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `v1/${REST}/:id`,

    PURCHASE: {
        CHECKOUT_LINK: `v1/${REST}/${REST_PURCHASE}/checkout-link`,
        WALLET: `v1/${REST}/${REST_PURCHASE}/wallet`,
    },

    STATISTIC: {
        PERCENTAGE_USED: `v1/${REST}/${REST_STATISTIC}/percentage-used`,
    },
};
