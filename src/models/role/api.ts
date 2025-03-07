import { get, patch, post, put, remove } from '../../utils/axiosHelper222';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ROLE_PATH } from './paths';
import {
    ICreateRoleParams,
    IQueryRoleParams,
    IRole,
    IUpdateRoleParams,
} from './types';

/**
 * Gets a list of all roles.
 */
export const queryRoleAPI = async (
    params?: IQueryRoleParams,
): Promise<IRole[]> => {
    const url = `${REST}`;
    const response = await get(url, { params });

    return response.data;
};

/**
 * Gets a role by id.
 */
export const getRoleByIdAPI = async (roleId: IdType): Promise<IRole> => {
    const url = generatePath(ROLE_PATH.GET_BY_ID, {
        id: roleId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Creates a new role.
 */
export const createRoleAPI = async (params: ICreateRoleParams) => {
    const url = ROLE_PATH.CREATE;

    const response = await post(url, params);
    return response.data;
};

/**
 * Updates a role by id.
 */
export const updateRoleAPI = async (
    priceId: IdType,
    params: IUpdateRoleParams,
) => {
    const url = generatePath(ROLE_PATH.UPDATE_BY_ID, {
        id: priceId,
    });
    const response = await put(url, params);
    return response.data;
};

/**
 * Deletes a role by id.
 */
export const deleteRoleByIdAPI = async (priceId: IdType) => {
    const url = generatePath(ROLE_PATH.DELETE_BY_ID, {
        id: priceId,
    });
    const response = await remove(url);
    return response.data;
};

/**
 * Grants permissions to a role.
 */
export const grandPermissionToRoleAPI = async (
    roleId: IdType,
    params: string,
) => {
    const url = generatePath(ROLE_PATH.PERMISSION.GRANT, {
        id: roleId,
    });

    const response = await patch(`${url}?${params}`);

    return response.data;
};

/**
 * Revokes permissions from a role.
 */
export const revokePermissionFromRole = async (
    roleId: IdType,
    params: string,
) => {
    const url = generatePath(ROLE_PATH.PERMISSION.REVOKE, {
        id: roleId,
    });
    const response = await remove(`${url}?${params}`);

    return response.data;
};

/**
 * Gets role permissions by role id.
 */
export const getPermissionFromRole = async (roleId: IdType) => {
    const url = generatePath(ROLE_PATH.PERMISSION.GET, {
        id: roleId,
    });
    const response = await get(url);

    return response.data;
};
