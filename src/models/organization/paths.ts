const REST = 'organizations';
const REST_USER = 'users';

export const ORGANIZATION_PATH = {
    GET: `${REST}`,
    CREATE: `${REST}`,

    GET_BY_ID: `${REST}/:id`,
    UPDATE_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    ASSIGN_ROLE_USERS: `${REST}/:id/assign-role-users`,

    USERS: {
        GET: `${REST}/:id/${REST_USER}`,
        ADD_TO_ORGANIZATION: `${REST}/:id/${REST_USER}/:userId`,
        ADD_FOR_DEFAULT_LANGUAGE_CODE_ORGANIZATION_SYSTEM: `${REST}/${REST_USER}/:userId`,

        UPDATE_STATUS: `${REST}/:id/${REST_USER}`,
        REMOVE_FROM_ORGANIZATION: `${REST}/:id/${REST_USER}/:userId`,
    },
};
