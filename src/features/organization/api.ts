import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { AbstractAPI } from '../base/AbstractAPI';
import { ORGANIZATION_PATH } from './paths';
import {
    IAssignRoleForUserInOrganizationParams,
    ICreateOrganizationParams,
    IGetOrganizationsParams,
    IGetUsersOfOrganizationParams,
    IOrganization,
    IOrganizationUser,
    IUpdateOrganizationParams,
    IUpdateUserStatusInOrganizationParams,
} from './types';

export class OrganizationAPI extends AbstractAPI {
    /**
     * # Adds a new user to the organization
     *
     * Add a user to the organization.
     *
     * @param organizationId - The id of the organization.
     * @param userId - The id of the user to add.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/add-a-user-in-an-organization}
     */
    public async addNewUserToOrganization(
        organizationId: IdType,
        userId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            ORGANIZATION_PATH.ADD_NEW_USER_TO_ORGANIZATION,
            {
                organizationId,
                userId,
            },
        );
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            config,
        );

        return response.data;
    }

    /**
     * # Adds a user for default language code organization system
     *
     * Add a new user to the organization system by the given user id based on the default language.
     *
     * @param userId - The user id to add.
     * @param languageCode - The language code to use.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/adds-a-user-for-default-language-code-organization}
     */
    public async addUserForDefaultLanguageCodeOrganizationSystem(
        userId: IdType,
        languageCode: string,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            ORGANIZATION_PATH.ADD_USER_FOR_DEFAULT_LANGUAGE_CODE_ORGANIZATION_SYSTEM,
            {
                userId,
            },
        );
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            null,
            {
                params: {
                    languageCode,
                },
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Assign role for a user in an organization
     *
     * Assign a role to the user in the organization.
     *
     * @param organizationId - The id of the organization.
     * @param params - The params for assigning a role to the user in the organization
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/assign-role-for-a-user-in-an-organization}
     */
    public async assignRoleForUserInOrganization(
        organizationId: IdType,
        params: IAssignRoleForUserInOrganizationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            ORGANIZATION_PATH.ASSIGN_ROLE_FOR_USER_IN_ORGANIZATION,
            {
                organizationId,
            },
        );
        const response = await this.axios.post<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Creates an organization
     *
     * Creates a new organization.
     *
     * @param params - The params for creating a new organization.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/create-an-organization}
     */
    public async createOrganization(
        params: ICreateOrganizationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ORGANIZATION_PATH.CREATE_ORGANIZATION;
        const response = await this.axios.post<HttpResponse<IOrganization>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * # Deletes an organization
     *
     * Deletes an organization by the given id.
     *
     * @param id - The organization id.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/delete-an-organization}
     */
    public async deleteOrganization(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ORGANIZATION_PATH.DELETE_ORGANIZATION, {
            id,
        });
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get an organization
     *
     * Gets an organization by the given id.
     *
     * @param id - The organization id.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/get-an-organization}
     */
    public async getOrganization(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(ORGANIZATION_PATH.GET_ORGANIZATION, {
            id,
        });
        const response = await this.axios.get<HttpResponse<IOrganization>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get organizations
     *
     * Get organizations.
     *
     * @param params - The params for getting organizations.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/get-organizations}
     */
    public async getOrganizations(
        params?: IGetOrganizationsParams,
        config?: AxiosRequestConfig,
    ) {
        const url = ORGANIZATION_PATH.GET_ORGANIZATIONS;

        const response = await this.axios.get<HttpResponseList<IOrganization>>(
            url,
            {
                params,
                ...config,
            },
        );

        return response.data;
    }

    /**
     * # Get users of an organization
     *
     * Get users of an organization
     *
     * @param organizationId - The id of the organization.
     * @param params - The params for getting users of an organization.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/get-users-of-an-organization}
     */
    public async getUsersOfOrganization(
        organizationId: IdType,
        params?: IGetUsersOfOrganizationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ORGANIZATION_PATH.GET_USERS_OF_ORGANIZATION, {
            organizationId,
        });
        const response = await this.axios.get<
            HttpResponseList<IOrganizationUser>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Remove a user in an organization
     *
     * Remove a user from an organization.
     *
     * @param id - The id of the organization.
     * @param userId - The id of the user.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/remove-a-user-in-an-organization}
     */
    public async removeUserInOrganization(
        organizationId: IdType,
        userId: IdType,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            ORGANIZATION_PATH.REMOVE_USERS_IN_ORGANIZATION,
            {
                organizationId,
                userId,
            },
        );
        const response = await this.axios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Updates an organization
     *
     * Updates an organization by the given id.
     *
     * @param params - The params for updating an organization.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-an-organization}
     */
    public async updateOrganization(
        id: IdType,
        params: IUpdateOrganizationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(ORGANIZATION_PATH.UPDATE_ORGANIZATION, {
            id,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }

    /**
     * Update a user status in an organization
     *
     * @param organizationId - The id of the organization.
     * @param params - The params for updating a user status in an organization.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-users-status-in-an-organization}
     */
    public async updateUserStatusInOrganization(
        organizationId: IdType,
        params: IUpdateUserStatusInOrganizationParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(
            ORGANIZATION_PATH.UPDATE_USER_STATUS_IN_ORGANIZATION,
            {
                organizationId,
            },
        );

        const response = await this.axios.patch<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
