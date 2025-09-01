import {
    addRolesToPermission,
    createPermission,
    deletePermission,
    getPermission,
    getPermissions,
    getRolesFromPermission,
    removeRolesFromPermission,
    updatePermission,
} from './api';

export * from './constants';
export * from './types';

export const permission = {
    addRolesToPermission,
    createPermission,
    deletePermission,
    getPermission,
    getPermissions,
    getRolesFromPermission,
    removeRolesFromPermission,
    updatePermission,
};
