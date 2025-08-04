const REST = 'devices';
const REST_USER = 'users';

export const DEVICE_PATH = {
    CHECK_USER_ACCESS_DEVICE: `v1/${REST}/check-user-access`,
    CREATE_DEVICE: `v1/${REST}`,
    DELETE_DEVICE: `v1/${REST}/{id}`,
    GET_DEVICE: `v1/${REST}/{id}`,
    GET_CURRENT_DEVICE_OF_USER_AUTHORIZED: `v1/${REST}/current`,
    GET_DEVICES: `v1/${REST}`,
    REFRESH_DEVICE_TOKEN: `v1/${REST}/refresh-token`,
    STATISTICS: `v1/${REST}/statistics`,
    UPDATE_DEVICE: `v1/${REST}/{id}`,
    GET_USERS_FROM_DEVICE: `v1/${REST}/{deviceId}/${REST_USER}`,
};
