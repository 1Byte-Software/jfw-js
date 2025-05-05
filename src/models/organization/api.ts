import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ORGANIZATION_PATH } from './paths';
import {
    IAddNewUserToOrganizationParams,
    IAddUserForDefaultLanguageCodeOrganizationSystemParams,
    IAssignRoleForUserInOrganizationData,
    IAssignRoleForUserInOrganizationParams,
    ICreateOrganizationData,
    IGetOrganizationParams,
    IGetUsersOfOrganizationParams,
    IOrganization,
    IOrganizationUser,
    IRemoveUserInOrganizationParams,
    IUpdateOrganizationData,
    IUpdateUserStatusInOrganizationData,
    IUpdateUserStatusInOrganizationParams
} from './types';

/**
 * Adds a new user to the organization.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/add-a-user-in-an-organization}
 */
export const addNewUserToOrganizationAPI = async (
    params: IAddNewUserToOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const { userId, organizationId } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.ADD_TO_ORGANIZATION, {
        id: organizationId,
        userId,
    });

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        null,
        config,
    );

    return response.data;
};

/**
 * Add a new user to the organization system by the given user id based on the default language.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/adds-a-user-for-default-language-code-organization}
 */
export const addUserForDefaultLanguageCodeOrganizationSystem = async (
    params: IAddUserForDefaultLanguageCodeOrganizationSystemParams,
    config?: AxiosRequestConfig,
) => {
    const { userId, languageCode } = params;
    const url = generatePath(
        ORGANIZATION_PATH.USERS
            .ADD_FOR_DEFAULT_LANGUAGE_CODE_ORGANIZATION_SYSTEM,
        {
            userId,
        },
    );

    const response = await jfwAxios.post<HttpResponse<boolean>>(url, null, {
        params: {
            languageCode,
        },
        ...config,
    });

    return response.data;
};

/**
 * Assign a role to the user in the organization.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/assign-role-for-a-user-in-an-organization}
 */
export const assignRoleForUserInOrganization = async (
    params: IAssignRoleForUserInOrganizationParams,
    data: IAssignRoleForUserInOrganizationData,
    config?: AxiosRequestConfig,
) => {
    const { organizationId } = params;

    const url = generatePath(ORGANIZATION_PATH.ASSIGN_ROLE_USERS, {
        id: organizationId,
    });

    const response = await jfwAxios.post<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Creates a new organization.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/create-an-organization}
 */
export const createOrganizationAPI = async (
    data: ICreateOrganizationData,
    config?: AxiosRequestConfig,
) => {
    const url = ORGANIZATION_PATH.CREATE;
    const response = await jfwAxios.post<HttpResponse<IOrganization | null>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes an organization by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/delete-an-organization}
 */
export const deleteOrganizationAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ORGANIZATION_PATH.DELETE_BY_ID, {
        id,
    });
    const response = await jfwAxios.delete(url, config);

    return response.data;
};

/**
 * Gets an organization by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/get-an-organization}
 */
export const getOrganizationAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ORGANIZATION_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IOrganization>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Gets the list of organizations.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/list-organizations}
 */
export const getOrganizationsAPI = async (
    params: IGetOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const url = ORGANIZATION_PATH.GET;

    const response = await jfwAxios.get<HttpResponseList<IOrganization>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * List all the users in organization.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/list-users-of-an-organization}
 */
export const getUsersOfOrganizationAPI = async (
    params?: IGetUsersOfOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const { organizationId, ...restParams } = params;

    const url = generatePath(ORGANIZATION_PATH.USERS.GET, {
        id: organizationId,
    });
    const response = await jfwAxios.get<HttpResponse<IOrganizationUser>>(url, {
        ...config,
        params: restParams,
    });

    return response.data;
};

/**
 * Remove an organization member.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/remove-a-user-in-an-organization}
 */
export const removeUserInOrganizationAPI = async (
    params: IRemoveUserInOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const { userId, organizationId } = params;

    const url = generatePath(ORGANIZATION_PATH.USERS.REMOVE_FROM_ORGANIZATION, {
        id: organizationId,
        userId,
    });

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Updates an organization by the given id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-an-organization}
 */
export const updateOrganizationAPI = async (
    id: IdType,
    data: IUpdateOrganizationData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ORGANIZATION_PATH.UPDATE_BY_ID, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Update a user status in an organization
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/organizations/updates-users-status-in-an-organization}
 */
export const updateUserStatusInOrganizationAPI = async (
    params: IUpdateUserStatusInOrganizationParams,
    data: IUpdateUserStatusInOrganizationData,
    config?: AxiosRequestConfig,
) => {
    const { organizationId } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.UPDATE_STATUS, {
        id: organizationId,
    });

    const response = await jfwAxios.patch<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};
