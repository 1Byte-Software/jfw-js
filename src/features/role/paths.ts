const REST = 'roles';
const REST_PERMISSION = 'permissions';
const REST_USER = 'users';

export const ROLE_PATH = {
    ASSIGN_USERS_TO_ROLE: `v1/${REST}/{id}/${REST_USER}`,
    DELETE_ROLE: `v1/${REST}/{id}`,
    CREATE_ROLE: `v1/${REST}`,
    GET_ROLE: `v1/${REST}/{id}`,
    GET_ROLES: `v1/${REST}`,

    GRANT_PERMISSIONS_TO_ROLE: `v1/${REST}/{roleId}/${REST_PERMISSION}`,
    GET_PERMISSIONS_GRANTED_BY_ROLE: `v1/${REST}/{roleId}/${REST_PERMISSION}`,
    REMOVE_PERMISSIONS_FROM_ROLE: `v1/${REST}/{roleId}/${REST_PERMISSION}`,

    UPDATE_ROLE: `v1/${REST}/{id}`,
};
