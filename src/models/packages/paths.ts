const REST = 'packages';
const REST_FEATURE = 'features';
const REST_PRICE = 'prices';

export const PACKAGE_PATH = {
    ADD_FEATURE_TO_PACKAGE: `v1/${REST}/{packageId}/${REST_FEATURE}`,
    CALCULATE_TOTAL_PRICE_CHECKOUT: `v1/${REST}/{packageId}/calculate-total-price-checkout`,
    CREATE_PACKAGE: `v1/${REST}`,
    DELETE_PACKAGE: `v1/${REST}/{id}`,

    GET_PACKAGE: `v1/${REST}/{id}`,
    GET_FEATURES_FROM_PACKAGE: `v1/${REST}/{id}/${REST_FEATURE}`,
    GET_PACKAGES: `v1/${REST}`,
    GET_PRICES_FROM_PACKAGE: `v1/${REST}/{id}/${REST_PRICE}`,
    REMOVE_FEATURES_FROM_PACKAGE: `v1/${REST}/{packageId}/${REST_FEATURE}`,
    RENEWAL_OR_UPGRADE_USER_PACKAGE: `v1/${REST}/{packageId}/upgrade/checkout`,
    UPDATE_PACKAGE: `v1/${REST}/{id}`,
    UPDATE_PACKAGE_FEATURE_DATA: `v1/${REST}/{packageId}/${REST_FEATURE}/{featureId}`,
};
