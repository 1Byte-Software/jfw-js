const REST = 'permissions';
const REST_ROLES = 'roles';

export const PERMISSION_PATH = {
    QUERY: `v1/${REST}`,
    CREATE: `v1/${REST}`,
    UPDATE_BY_ID: `v1/${REST}/:id`,
    GET_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `v1/${REST}/:id`,

    ROLE: {
        GET: `v1/${REST}/:id/${REST_ROLES}`,
        ADD: `v1/${REST}/:id/${REST_ROLES}`,
        REVOKE: `v1/${REST}/:id/${REST_ROLES}`,
    },
};
