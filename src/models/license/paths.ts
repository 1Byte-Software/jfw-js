const REST = 'licenses';
const REST_PURCHASE = 'purchase';
const REST_STATISTIC = 'statistics';

export const LICENSE_PATH = {
    APPLY_LICENSE_TO_LOGGED_USER: `v1/${REST}/apply`,
    APPLY_LICENSE_TO_GIVEN_LOGIN_NAME: `v1/${REST}/apply-to-login-name`,
    APPLY_LICENSE_TO_GIVEN_USER: `v1/${REST}/apply-to-user`,

    CHECK_A_LICENSE_KEY: `v1/${REST}/check`,

    CREATE_LICENSES: `v1/${REST}`,
    COUNT_LICENSES_CREATED: `v1/${REST}/count`,
    DELETE_LICENSE: `v1/${REST}/{id}`,
    GET_LICENSES: `v1/${REST}`,
    GET_LICENSE: `v1/${REST}/{id}`,
    GENERATE_LICENSE_KEY: `v1/${REST}/generate-key`,

    PURCHASE_TO_ADD_LICENSES_BY_CHECKOUT_LINK: `v1/${REST}/${REST_PURCHASE}/checkout-link`,
    PURCHASE_TO_ADD_LICENSES_BY_WALLET: `v1/${REST}/${REST_PURCHASE}/wallet`,
    STATISTICS_PERCENTAGE_LICENSES_USED: `v1/${REST}/${REST_STATISTIC}/percentage-used`,
};
