const REST = 'devices';

export const DEVICE_PATH = {
    QUERY: `${REST}`,

    CREATE: `${REST}`,
    GET_BY_ID: `${REST}/:id`,
    UPDATE_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    CHECK_USER_ACCESS: `v1/${REST}/check-user-access`,
    GET_BY_LIST_ID: `${REST}/by-list-id`,
    GET_CURRENT: `${REST}/current`,
    GET_BY_CODE: `${REST}/by-code/:code`,
};
