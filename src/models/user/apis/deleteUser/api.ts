import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IDeleteUserOptions } from './types';

/**
 * # Delete a user
 *
 * This deletes the user information for the given user id.
 *
 * @param options - The options for delete a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/delete-a-user}
 */
export const deleteUserAPI = async (
    options: IDeleteUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.DELETE_USER, pathParameters);

    const response = await jfwAxios.delete<HttpResponse<true>>(url, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
