import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { IPermission } from '../permission';
import { ROLE_PATH } from './paths';
import {
    ICreateRoleParams,
    IGetRolesParams,
    IRole,
    IUpdateRoleParams,
} from './types';

export class RoleAPI extends AbstractAPI {
    /**
     * # Assign users to a role
     *
     * Assign users to a role.
     *
     * @param id - The id of the role.
     * @param userIds - The list id of the user to assign the role to.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/assign-users-to-a-role}
     */
    public async assignUsersToRole(
        id: IdType,
        userIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ROLE_PATH.ASSIGN_USERS_TO_ROLE, {
            id,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            {
                userIds,
            },
            config,
        );

        return response.data;
    }

    /**
     * # Delete a role
     *
     * Delete a role by the role id in your brand.
     *
     * Once deleted, it is removed from any user who was previously assigned that role and permissions.
     * This action cannot be undone.
     *
     * @param id - The id of the role to delete.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/delete-a-role}
     */
    public async deleteRole(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ROLE_PATH.DELETE_ROLE, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Create a role
     *
     * Note: New roles are not associated with any permissions by default.
     * To assign existing permissions to your role, review Associate Permissions with a Role.
     * To create new permissions, review Add API Permissions.
     *
     * @param params - The params for creating a role.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/create-a-role}
     */
    public async createRole(
        params: ICreateRoleParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ROLE_PATH.CREATE_ROLE;
        const response = await this.axios.post<HttpResponse<IRole>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Get a role
     *
     * Get a role by the role id.
     *
     * @param id - The id of the role.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/get-a-role}
     */
    public async getRole(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ROLE_PATH.GET_ROLE, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IRole>>(url, config);

        return response.data;
    }

    /**
     * # Get roles
     *
     * Get roles in your brand.
     *
     * @param params - The params for getting roles.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/get-roles}
     */
    public async getRoles(
        params?: IGetRolesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ROLE_PATH.GET_ROLES;
        const response = await this.axios.get<HttpResponseList<IRole>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Grants permissions to a role
     *
     * This endpoint allows you to grants (add) one or more permissions with a specific role.
     *
     * @param roleId - The id of the role.
     * @param permissionIds - The list of permission ids.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/grant-permissions-to-a-role}
     */
    public async grantPermissionsToRole(
        roleId: IdType,
        permissionIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ROLE_PATH.GRANT_PERMISSIONS_TO_ROLE, {
            roleId,
        });
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            {
                permissionIds,
            },
            config,
        );

        return response.data;
    }

    /**
     * # Get permissions granted by role
     *
     * Retrieve detailed list (name, description, resource server) of permissions granted by a specified user role.
     *
     * Get permissions granted by role.
     *
     * @param roleId - The id of the role to list granted permissions.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/get-permissions-granted-by-role}
     */
    public async getPermissionsGrantedByRole(
        roleId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ROLE_PATH.GET_PERMISSIONS_GRANTED_BY_ROLE, {
            roleId,
        });
        const response = await this.axios.get<HttpResponse<IPermission[]>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Remove permissions from a role
     *
     * This endpoint allows you to remove one or more permissions from a specific role.
     *
     * Remove permissions from a role.
     *
     * @param roleId - The id of the role.
     * @param permissionIds - The list of permission ids.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/remove-permissions-from-a-role}
     */
    public async removePermissionsFromRole(
        roleId: IdType,
        permissionIds: IdType[],
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ROLE_PATH.REMOVE_PERMISSIONS_FROM_ROLE, {
            roleId,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(url, {
            data: {
                permissionIds,
            },
            ...config,
        });

        return response.data;
    }

    /**
     * # Update a role
     *
     * Update a role by id.
     *
     * @param id - The role id.
     * @param params - The params for updating a role.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/roles/update-a-role}
     */
    public async updateRole(
        id: IdType,
        params: IUpdateRoleParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ROLE_PATH.UPDATE_ROLE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<IRole>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
