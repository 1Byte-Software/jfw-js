const REST = 'roles';
const REST_PERMISSION = 'permissions';

export const ROLE_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,
    UPDATE_BY_ID: `${REST}/:id`,
    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    PERMISSION: {
        GET: `${REST}/:id/${REST_PERMISSION}`,
        GRANT: `${REST}/:id/${REST_PERMISSION}`,
        REVOKE: `${REST}/:id/${REST_PERMISSION}`,
    },
};
