import { RawAxiosRequestHeaders } from 'axios';
import { get, patch, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponse, IdType } from '../base';
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
import { IResponse } from '../../core';

/**
 * JFW-49: Thiếu tài liệu GET: api/organizations
 */
export const queryOrganizationAPI = async (
    params: IQueryOrganizationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IOrganization>> => {
    const url = ORGANIZATION_PATH.QUERY;

    const response = await get(url, { params }, userHeaders);

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * Gets an organization by the given id.
 */
export const getOrganizationByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IOrganization> => {
    const url = generatePath(ORGANIZATION_PATH.GET_BY_ID, {
        id,
    });
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * #JFW-50: Thiếu tài liệu POST: api/organizations/upload-file
 */
export const uploadFileToOrganizationAPI = async (
    id: IdType,
    payload: FormData,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(ORGANIZATION_PATH.UPLOAD_FILE, {
        id,
    });

    return post(
        url,
        payload,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
        userHeaders,
    );
};

/**
 * #JFW-51: Thiếu tài liệu POST: /api/organizations/{organizationId}/users/{userId}
 */
export const addUserToOrganizationAPI = async (
    params: IAddUserToOrganizationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<IOrganizationUser>> => {
    const { userId, organizationId } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.ADD_TO_ORGANIZATION, {
        id: organizationId,
        userId,
    });

    const response = await post(url, null, null, userHeaders);

    return response.data;
};

/**
 * Update a user status in an organization
 */
export const updateUserStatusInOrganizationAPI = async (
    params: IUpdateUserStatusInOrganizationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<IOrganizationUser>> => {
    const { userId, organizationId, ...restParams } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.UPDATE_STATUS_BY_ID, {
        id: organizationId,
        userId,
    });

    const response = await patch(
        url,
        null,
        { params: restParams },
        userHeaders,
    );

    return response.data;
};

/**
 * Remove a user in an organization.
 */
export const removeUserInOrganizationAPI = async (
    params: IRemoveUserInOrganizationParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const { userId, organizationId } = params;

    const url = generatePath(ORGANIZATION_PATH.USERS.REMOVE_FROM_ORGANIZATION, {
        id: organizationId,
        userId,
    });

    return remove(url, userHeaders);
};

/**
 * List all the users in organization.
 */
export const queryUsersOfOrganizationAPI = async (
    params?: IQueryUsersOfOrganizationParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IOrganizationUser>> => {
    const { organizationId, ...restParams } = params;
    const url = generatePath(ORGANIZATION_PATH.USERS.QUERY, {
        id: organizationId,
    });
    const response = await get(url, { params: restParams }, userHeaders);

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * Creates a new organization.
 */
export const createOrganizationAPI = async (
    params: ICreateOrganizationParams,
) => {
    const url = ORGANIZATION_PATH.CREATE;
    const response = await post(url, params);

    return response.data;
};

/**
 * #JFW-53: Thiếu tài liệu UPDATE: api/organizations/:id
 */
export const updateOrganizationAPI = async (
    id: IdType,
    payload: IUpdateOrganizationParams,
) => {
    const url = generatePath(ORGANIZATION_PATH.UPDATE_BY_ID, {
        id,
    });
    const response = await put(url, payload);

    return response.data;
};

/**
 * #JFW-54: Thiếu tài liệu UPDATE: api/organizations/:id
 */
export const deleteOrganizationAPI = async (id: IdType) => {
    const url = generatePath(ORGANIZATION_PATH.DELETE_BY_ID, {
        id,
    });
    const response = await remove(url);

    return response.data;
};
