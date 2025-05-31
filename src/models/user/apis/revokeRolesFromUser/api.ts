import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IRevokeRolesFromUserOptions } from './types';

/**
 * # Revokes roles from the user.
 *
 * @param options - The options for assign roles to users.
 * @param config - Optional axios request configuration object.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/revokes-roles-to-a-user}
 */
export const revokeRolesFromUserAPI = async (
    options: IRevokeRolesFromUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, queryParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.ROLES.REMOVE_FROM_USER, pathParameters);

    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, {
        params: queryParameters,
        paramsSerializer: {
            indexes: true, // use brackets with indexes
        },
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
