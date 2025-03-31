const REST = 'roles';
const REST_PERMISSION = 'permissions';
const REST_USER = 'users';

export const ROLE_PATH = {
    QUERY: `v1/${REST}`,
    CREATE: `${REST}`,
    UPDATE_BY_ID: `${REST}/:id`,
    GET_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    PERMISSION: {
        GET: `v1/${REST}/:id/${REST_PERMISSION}`,
        GRANT: `v1/${REST}/:id/${REST_PERMISSION}`,
        REMOVE: `v1/${REST}/:id/${REST_PERMISSION}`,
    },

    USER: {
        ASSIGN: `v1/${REST}/:id/${REST_USER}`,
    },
};
