import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IRole } from '../role';
import { PERMISSION_PATH } from './paths';
import {
    ICreatePermissionData,
    IGetPermissionsParams,
    IPermission,
    IUpdatePermissionData,
} from './types';

/**
 * Gets a list of all permissions.
 */
export const getPermissionsAPI = async (
    params?: IGetPermissionsParams,
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
export const getPermissionAPI = async (
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
    params: ICreatePermissionData,
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
    payload: IUpdatePermissionData,
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
