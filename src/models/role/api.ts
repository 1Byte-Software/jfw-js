import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ROLE_PATH } from './paths';
import {
    ICreateRoleParams,
    IQueryRoleParams,
    IRole,
    IUpdateRoleParams,
} from './types';
import { IPermission } from '../permission';

/**
 * Lists all roles in your brand.
 */
export const queryRoleAPI = async (
    params?: IQueryRoleParams,
    configs?: AxiosRequestConfig,
) => {
    const url = ROLE_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponseList<IRole>>(url, {
        params,
        ...configs,
    });

    return response.data;
};

/**
 * Gets a role by the role id.
 */
export const getRoleByIdAPI = async (
    roleId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.GET_BY_ID, {
        id: roleId,
    });
    const response = await jfwAxios.get<HttpResponse<IRole>>(url, config);

    return response.data;
};

/**
 * Creates a new role.
 */
export const createRoleAPI = async (
    data: ICreateRoleParams,
    config?: AxiosRequestConfig,
) => {
    const url = ROLE_PATH.CREATE;

    const response = await jfwAxios.post(url, data, config);
    return response.data;
};

/**
 * Updates a role by id.
 */
export const updateRoleAPI = async (
    roleId: IdType,
    data: IUpdateRoleParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.UPDATE_BY_ID, {
        id: roleId,
    });
    const response = await jfwAxios.put(url, data, config);
    return response.data;
};

/**
 * Deletes a role by id.
 */
export const deleteRoleByIdAPI = async (
    roleId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.DELETE_BY_ID, {
        id: roleId,
    });
    const response = await jfwAxios.delete(url, config);
    return response.data;
};

/**
 * Grants permissions to a role.
 */
export const grandPermissionToRoleAPI = async (
    roleId: IdType,
    permissionIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.PERMISSION.GRANT, {
        id: roleId,
    });

    const response = await jfwAxios.post(
        url,
        {
            permissionIds,
        },
        config,
    );

    return response.data;
};

/**
 * Remove permissions from a role.
 */
export const removePermissionFromRoleAPI = async (
    roleId: IdType,
    permissionIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.PERMISSION.REMOVE, {
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

/**
 * Gets role permissions by role id.
 */
export const getPermissionByRoleAPI = async (
    roleId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.PERMISSION.GET, {
        id: roleId,
    });
    const response = await jfwAxios.get<HttpResponse<IPermission[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Assign role to users
 */
export const assignRoleToUsers = async (
    roleId: IdType,
    userIds: IdType[],
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ROLE_PATH.USER.ASSIGN, {
        id: roleId,
    });
    const response = await jfwAxios.post(
        url,
        {
            userIds,
        },
        config,
    );

    return response.data;
};
