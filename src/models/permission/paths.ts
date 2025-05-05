const REST = 'permissions';
const REST_ROLES = 'roles';

export const PERMISSION_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,
    UPDATE_BY_ID: `${REST}/:id`,
    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    ROLE: {
        GET: `${REST}/:id/${REST_ROLES}`,
        ADD: `${REST}/:id/${REST_ROLES}`,
        REVOKE: `${REST}/:id/${REST_ROLES}`,
    },
};
