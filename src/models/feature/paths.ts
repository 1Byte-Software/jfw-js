const REST = 'features';
const REST_PACKAGE = 'packages';

export const FEATURE_PATH = {
    CREATE_FEATURE: `${REST}`,
    DELETE_FEATURE: `${REST}/:id`,
    GET_FEATURE: `${REST}/:id`,
    GET_FEATURES: `${REST}`,
    UPDATE_FEATURE: `${REST}/:id`,

    GET_PACKAGES_BY_FEATURE: `${REST}/:id/${REST_PACKAGE}`,
};
