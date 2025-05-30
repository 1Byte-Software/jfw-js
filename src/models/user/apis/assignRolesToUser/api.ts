import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IAssignRolesToUserOptions } from './types';

/**
 * # Assigns roles to the user.
 *
 * @param options - The options for assign roles to users.
 * @param config - Optional axios request configuration object.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/assigns-roles-to-a-user}
 */
export const assignRolesToUserAPI = async (
    options: IAssignRolesToUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, queryParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.ROLES.ASSIGN_TO_USER, pathParameters);

    const response = await jfwAxios.post<HttpResponse<true>>(url, null, {
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
