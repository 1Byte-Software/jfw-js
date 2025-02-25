const REST = 'v1/licenses';
const REST_PURCHASE = 'purchase';
const REST_STATISTIC = 'statistics';

export const LICENSE_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,
    GENERATE_KEY: `${REST}/generate-key`,
    CHECK: `${REST}/check`,
    APPLY: `${REST}/apply`,
    APPLY_TO_LOGIN_NAME: `${REST}/apply-to-login-name`,
    APPLY_TO_USER: `${REST}/apply-to-user`,
    GET_COUNT: `${REST}/count`,

    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    EXPORT: `${REST}/:id/export`,

    PURCHASE: {
        CHECKOUT_LINK: `${REST}/${REST_PURCHASE}/checkout-link`,
        WALLET: `${REST}/${REST_PURCHASE}/wallet`,
    },

    STATISTIC: {
        PERCENTAGE_USED: `${REST}/${REST_STATISTIC}/percentage-used`,
    },
};
