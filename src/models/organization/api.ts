import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { ORGANIZATION_PATH } from './paths';
import {
    IAddUserToOrganizationParams,
    ICreateOrganizationParams,
    IOrganization,
    IOrganizationUser,
    IQueryOrganizationParams,
    IQueryUsersOfOrganizationParams,
    IRemoveUserInOrganizationParams,
    IUpdateOrganizationParams,
    IUpdateUserStatusInOrganizationParams,
} from './types';

/**
 * JFW-49: Thiếu tài liệu GET: api/organizations
 */
export const queryOrganizationAPI = async (
    params: IQueryOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const url = ORGANIZATION_PATH.QUERY;

    const response = await jfwAxios.get<HttpResponseList<IOrganization>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Gets an organization by the given id.
 */
export const getOrganizationByIdAPI = async (
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
 * #JFW-50: Thiếu tài liệu POST: api/organizations/upload-file
 */
export const uploadFileToOrganizationAPI = async (
    id: IdType,
    payload: FormData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ORGANIZATION_PATH.UPLOAD_FILE, {
        id,
    });

    return jfwAxios.post(url, payload, {
        ...config,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

/**
 * #JFW-51: Thiếu tài liệu POST: /api/organizations/{organizationId}/users/{userId}
 */
export const addUserToOrganizationAPI = async (
    params: IAddUserToOrganizationParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponse<IOrganizationUser>> => {
    const { userId, organizationId } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.ADD_TO_ORGANIZATION, {
        id: organizationId,
        userId,
    });

    const response = await jfwAxios.post(url, null, config);

    return response.data;
};

/**
 * Update a user status in an organization
 */
export const updateUserStatusInOrganizationAPI = async (
    params: IUpdateUserStatusInOrganizationParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponse<IOrganizationUser>> => {
    const { userId, organizationId, ...restParams } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.UPDATE_STATUS_BY_ID, {
        id: organizationId,
        userId,
    });

    const response = await jfwAxios.patch(url, null, {
        ...config,
        params: restParams,
    });

    return response.data;
};

/**
 * Remove a user in an organization.
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

    return jfwAxios.delete(url, config);
};

/**
 * List all the users in organization.
 */
export const queryUsersOfOrganizationAPI = async (
    params?: IQueryUsersOfOrganizationParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponse<IOrganizationUser>> => {
    const { organizationId, ...restParams } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.QUERY, {
        id: organizationId,
    });
    const response = await jfwAxios.get(url, { ...config, params: restParams });

    return response.data;
};

/**
 * Creates a new organization.
 */
export const createOrganizationAPI = async (
    data: ICreateOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const url = ORGANIZATION_PATH.CREATE;
    const response = await jfwAxios.post(url, data, config);

    return response.data;
};

/**
 * #JFW-53: Thiếu tài liệu UPDATE: api/organizations/:id
 */
export const updateOrganizationAPI = async (
    id: IdType,
    data: IUpdateOrganizationParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(ORGANIZATION_PATH.UPDATE_BY_ID, {
        id,
    });
    const response = await jfwAxios.put(url, data, config);

    return response.data;
};

/**
 * #JFW-54: Thiếu tài liệu UPDATE: api/organizations/:id
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
