const REST = 'organizations';
const REST_USER = 'users';

export const ORGANIZATION_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,

    GET_BY_ID: `${REST}/:id`,
    UPDATE_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    USERS: {
        QUERY: `${REST}/:id/${REST_USER}`,
        // ADD_TO_ORGANIZATION: `${REST}/${REST_USER}/:userId`,
        ADD_TO_ORGANIZATION: `${REST}/:id/${REST_USER}/:userId`,

        UPDATE_STATUS_BY_ID: `${REST}/:id/${REST_USER}/:userId`,
        UPDATE_STATUS: `${REST}/:id/${REST_USER}`,
        REMOVE_FROM_ORGANIZATION: `${REST}/:id/${REST_USER}/:userId`,
        ASSIGN_ROLE: `${REST}/:id/${REST_USER}/assign-role-users`,
    },

    UPLOAD_FILE: `${REST}/:id/upload-file`,
};
