const REST = 'devices';

export const DEVICE_PATH = {
    CHECK_USER_ACCESS_DEVICE: `v1/${REST}/check-user-access`,
    CREATE_DEVICE: `${REST}`,
    DELETE_DEVICE: `${REST}/:id`,
    GET_DEVICE: `${REST}/:id`,
    GET_CURRENT_DEVICE_OF_USER_AUTHORIZED: `${REST}/current`,
    GET_DEVICES: `${REST}`,
    STATISTICS: `${REST}/statistics`,
    UPDATE_DEVICE: `${REST}/:id`,
};
