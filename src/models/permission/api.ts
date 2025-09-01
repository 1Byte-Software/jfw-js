import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { IRole } from '../role';
import { PERMISSION_PATH } from './paths';
import {
    ICreatePermissionParams,
    IGetPermissionsParams,
    IPermission,
    IUpdatePermissionParams,
} from './types';

export class PermissionAPI {
    /**
     * # Add roles to a permission
     *
     * Add roles to a permission
     *
     * @param permissionId - The id of the permission.
     * @param roleIds - The list of role ids.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission}
     */
    public async addRolesToPermission(
        permissionId: IdType,
        roleIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PERMISSION_PATH.ADD_ROLES_TO_PERMISSION, {
            permissionId,
        });
        const response = await jfwAxios.post<HttpResponse<boolean>>(
            url,
            {
                roleIds,
            },
            config,
        );

        return response.data;
    }

    /**
     * Create a permission
     *
     * Create a permission
     *
     * @param params - The params for creating a permission.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/add-roles-to-a-permission}
     */
    public async createPermission(
        params: ICreatePermissionParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PERMISSION_PATH.CREATE_PERMISSION;
        const response = await jfwAxios.post<HttpResponse<IPermission>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Delete a permission
     *
     * Deletes a permission
     *
     * @param id - The id of the permission to delete.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/delete-a-permission}
     */
    public async deletePermission(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PERMISSION_PATH.DELETE_PERMISSION, {
            id,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * Gets a permission
     *
     * Get a permission
     *
     * @param id - The id of the permission.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/get-a-permission}
     */
    public async getPermission(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(PERMISSION_PATH.GET_PERMISSION, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<IPermission>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get permissions
     *
     * Gets a list of all permissions
     *
     * @param id - The id of the permission.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/get-permissions}
     */
    public async getPermissions(
        params?: IGetPermissionsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = PERMISSION_PATH.GET_PERMISSIONS;
        const response = await jfwAxios.get<HttpResponseList<IPermission>>(
            url,
            {
                ...config,
                params,
            },
        );

        return response.data;
    }

    /**
     * # Get roles from a permission
     *
     * Get roles by permission id.
     *
     * @param permissionId - The id of the permission to update.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/get-roles-from-a-permission}
     */
    public async getRolesFromPermission(
        permissionId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PERMISSION_PATH.GET_ROLES_FROM_PERMISSION, {
            permissionId,
        });
        const response = await jfwAxios.get<HttpResponse<IRole[]>>(url, config);

        return response.data;
    }

    /**
     * # Remove roles from a permission
     *
     * Remove roles from a permission
     *
     * @param permissionId - The id of the permission.
     * @param roleIds - The list of role ids.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/remove-roles-from-a-permission}
     */
    public async removeRolesFromPermission(
        permissionId: IdType,
        roleIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PERMISSION_PATH.REMOVE_ROLES_FROM_PERMISSION, {
            permissionId,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(url, {
            data: {
                roleIds,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Update a permission
     *
     * Updates a permission
     *
     * @param id - The id of the permission to update.
     * @param params - The params for updating a permission.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/permissions/update-a-permission}
     */
    public async updatePermission(
        id: IdType,
        params: IUpdatePermissionParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(PERMISSION_PATH.UPDATE_PERMISSION, {
            id,
        });
        const response = await jfwAxios.put(url, params, config);

        return response.data;
    }
}
