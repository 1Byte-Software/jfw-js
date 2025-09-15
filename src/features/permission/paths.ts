const REST = 'permissions';
const REST_ROLES = 'roles';

export const PERMISSION_PATH = {
    ADD_ROLES_TO_PERMISSION: `v1/${REST}/{permissionId}/${REST_ROLES}`,
    CREATE_PERMISSION: `v1/${REST}`,
    DELETE_PERMISSION: `v1/${REST}/{id}`,
    GET_PERMISSION: `v1/${REST}/{id}`,
    GET_PERMISSIONS: `v1/${REST}`,
    GET_ROLES_FROM_PERMISSION: `v1/${REST}/{permissionId}/${REST_ROLES}`,
    REMOVE_ROLES_FROM_PERMISSION: `v1/${REST}/{permissionId}/${REST_ROLES}`,
    UPDATE_PERMISSION: `v1/${REST}/{id}`,
};
