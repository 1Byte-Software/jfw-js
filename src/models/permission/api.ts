import { get, post, put, remove } from '../../utils/axiosHelper222';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PERMISSION_PATH } from './paths';
import {
    ICreatePermissionParams,
    IPermission,
    IQueryPermissionParams,
    IUpdatePermissionParams,
} from './types';

/**
 * Gets a list of all permissions.
 */
export const queryPermissionAPI = async (params?: IQueryPermissionParams) => {
    const url = PERMISSION_PATH.QUERY;

    const response = await get(url, {
        params,
    });

    return response;
};

/**
 * Gets a permission
 */
export const getPermissionByIdAPI = async (
    permissionId: IdType,
): Promise<IPermission> => {
    const url = generatePath(PERMISSION_PATH.GET_BY_ID, {
        id: permissionId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * Add a new permission
 */
export const createPermissionAPI = async (params: ICreatePermissionParams) => {
    const url = PERMISSION_PATH.CREATE;
    const response = await post(url, params);

    return response.data;
};

/**
 * Updates a permission
 */
export const updatePermissionByIdAPI = async (
    permissionId: IdType,
    payload: IUpdatePermissionParams,
) => {
    const url = generatePath(PERMISSION_PATH.UPDATE_BY_ID, {
        id: permissionId,
    });
    const response = await put(url, payload);

    return response.data;
};

/**
 * Deletes a permission
 */
export const deletePermissionAPI = async (permissionId: IdType) => {
    const url = generatePath(PERMISSION_PATH.DELETE_BY_ID, {
        id: permissionId,
    });
    const response = await remove(url);

    return response.data;
};
