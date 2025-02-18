const REST = 'packages';
const REST_FEATURE = 'features';

export const PACKAGE_PATH = {
    QUERY: `${REST}`,

    CREATE: `${REST}`,
    GET_BY_ID: `${REST}/:id`,
    UPDATE_BY_ID: `${REST}/:id`,

    DELETE_BY_ID: `${REST}/:id`,
    GET_PRICE: `${REST}/:id/prices`,

    FEATURES: {
        QUERY: `${REST}/:id/${REST_FEATURE}`,
        ADD_TO_PACKAGE: `${REST}/:id/${REST_FEATURE}`,
        DELETE_BY_LIST: `${REST}/:id/${REST_FEATURE}`,
    },
};
