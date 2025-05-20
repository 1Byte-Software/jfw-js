const REST = 'organizations';
const REST_USER = 'users';

export const ORGANIZATION_PATH = {
    GET: `v1/${REST}`,
    CREATE: `v1/${REST}`,

    GET_BY_ID: `v1/${REST}/:id`,
    UPDATE_BY_ID: `v1/${REST}/:id`,
    DELETE_BY_ID: `v1/${REST}/:id`,

    ASSIGN_ROLE_USERS: `v1/${REST}/:id/assign-role-users`,

    USERS: {
        GET: `v1/${REST}/:id/${REST_USER}`,
        ADD_TO_ORGANIZATION: `v1/${REST}/:id/${REST_USER}/:userId`,
        ADD_FOR_DEFAULT_LANGUAGE_CODE_ORGANIZATION_SYSTEM: `v1/${REST}/${REST_USER}/:userId`,

        UPDATE_STATUS: `v1/${REST}/:id/${REST_USER}`,
        REMOVE_FROM_ORGANIZATION: `v1/${REST}/:id/${REST_USER}/:userId`,
    },
};
