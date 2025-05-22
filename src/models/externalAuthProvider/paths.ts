const REST = 'external-auth-providers';

export const EXTERNAL_AUTH_PROVIDER_PATH = {
    QUERY: `v1/${REST}`,
    CREATE: `v1/${REST}`,
    UPDATE_BY_ID: `v1/${REST}/:id`,
    GET_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `v1/${REST}/:id`,
};
