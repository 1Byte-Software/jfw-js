const REST = 'organizations';
const REST_USER = 'users';

export const ORGANIZATION_PATH = {
    LIST: `${REST}`,
    CREATE: `${REST}`,

    GET_BY_ID: `${REST}/:id`,
    UPDATE_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    ASSIGN_ROLE_USERS: `${REST}/:id/assign-role-users`,

    USERS: {
        LIST: `${REST}/:id/${REST_USER}`,
        ADD_TO_ORGANIZATION: `${REST}/:id/${REST_USER}/:userId`,
        ADD_FOR_DEFAULT_LANGUAGE_CODE_ORGANIZATION_SYSTEM: `${REST}/${REST_USER}/:userId`,

        UPDATE_STATUS_BY_ID: `${REST}/:id/${REST_USER}/:userId`,
        UPDATE_STATUS: `${REST}/:id/${REST_USER}`,
        REMOVE_FROM_ORGANIZATION: `${REST}/:id/${REST_USER}/:userId`,
        ASSIGN_ROLE: `${REST}/:id/${REST_USER}/assign-role-users`,
    },
};
