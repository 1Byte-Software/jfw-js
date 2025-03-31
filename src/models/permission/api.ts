import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { PERMISSION_PATH } from './paths';
import {
    ICreatePermissionParams,
    IPermission,
    IQueryPermissionParams,
    IUpdatePermissionParams,
} from './types';
import { HttpResponse, HttpResponseList } from '../../core';
import { IRole } from '../role';

/**
 * Gets a list of all permissions.
 */
export const queryPermissionAPI = async (
    params?: IQueryPermissionParams,
    config?: AxiosRequestConfig,
) => {
    const url = PERMISSION_PATH.QUERY;

    const response = await jfwAxios.get<HttpResponseList<IPermission>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Gets a permission
 */
export const getPermissionByIdAPI = async (
    permissionId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PERMISSION_PATH.GET_BY_ID, {
        id: permissionId,
    });
    const response = await jfwAxios.get<HttpResponse<IPermission>>(url, config);

    return response.data;
};

/**
 * Add a new permission
 */
export const createPermissionAPI = async (
    params: ICreatePermissionParams,
    config?: AxiosRequestConfig,
) => {
    const url = PERMISSION_PATH.CREATE;
    const response = await jfwAxios.post(url, params, config);

    return response.data;
};

/**
 * Updates a permission
 */
export const updatePermissionByIdAPI = async (
    permissionId: IdType,
    payload: IUpdatePermissionParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PERMISSION_PATH.UPDATE_BY_ID, {
        id: permissionId,
    });
    const response = await jfwAxios.put(url, payload, config);

    return response.data;
};

/**
 * Deletes a permission
 */
export const deletePermissionByIdAPI = async (
    permissionId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PERMISSION_PATH.DELETE_BY_ID, {
        id: permissionId,
    });
    const response = await jfwAxios.delete(url, config);

    return response.data;
};

/**
 * Gets roles from a permission
 */
export const getRolesFromPermissionAPI = async (
    permissionId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PERMISSION_PATH.ROLE.GET, {
        id: permissionId,
    });
    const response = await jfwAxios.get<HttpResponse<IRole[]>>(url, config);

    return response.data;
};

/**
 * Add roles to a permission
 */
export const addRolesToPermission = async (
    permissionId: IdType,
    roleIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PERMISSION_PATH.ROLE.ADD, {
        id: permissionId,
    });
    const response = await jfwAxios.post(
        url,
        {
            roleIds,
        },
        config,
    );

    return response.data;
};

/**
 * Revoke permissions from a role
 */
export const revokePermissionsFromRole = async (
    roleId: IdType,
    permissionIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(PERMISSION_PATH.ROLE.REVOKE, {
        id: roleId,
    });
    const response = await jfwAxios.delete(url, {
        data: {
            permissionIds,
        },
        ...config,
    });

    return response.data;
};
