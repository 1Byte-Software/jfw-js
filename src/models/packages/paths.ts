const REST = 'packages';
const REST_FEATURE = 'features';
const REST_PRICE = 'prices';

export const PACKAGE_PATH = {
    ADD_FEATURE_TO_PACKAGE: `${REST}/:id/${REST_FEATURE}`,
    CREATE_PACKAGE: `${REST}`,
    DELETE_PACKAGE: `${REST}/:id`,

    GET_PACKAGE: `${REST}/:id`,
    GET_PACKAGES: `${REST}`,
    GET_PRICES_FROM_PACKAGE: `${REST}/:id/${REST_PRICE}`,
    UPDATE_PACKAGE: `${REST}/:id`,
    REMOVE_FEATURES_FROM_PACKAGE: `${REST}/:id/${REST_FEATURE}`,
};
