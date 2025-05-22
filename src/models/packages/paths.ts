const REST = 'packages';
const REST_FEATURE = 'features';
const REST_PRICE = 'prices';

export const PACKAGE_PATH = {
    ADD_FEATURE_TO_PACKAGE: `v1/${REST}/:id/${REST_FEATURE}`,
    CREATE_PACKAGE: `v1/${REST}`,
    DELETE_PACKAGE: `v1/${REST}/:id`,

    GET_PACKAGE: `v1/${REST}/:id`,
    GET_PACKAGES: `v1/${REST}`,
    GET_PRICES_FROM_PACKAGE: `v1/${REST}/:id/${REST_PRICE}`,
    UPDATE_PACKAGE: `v1/${REST}/:id`,
    REMOVE_FEATURES_FROM_PACKAGE: `v1/${REST}/:id/${REST_FEATURE}`,

    GET_FEATURES_FROM_PACKAGE: `v1/${REST}/:id/${REST_FEATURE}`,
};
