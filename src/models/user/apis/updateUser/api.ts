import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IUser } from '../../types';
import { IUpdateUserOptions } from './types';

/**
 * # Updates a user
 *
 * Updates the user information for the given user id.
 *
 * @param options - The options for updates a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/update-a-user}
 */
export const updateUserAPI = async (
    options: IUpdateUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters, body } = options;
    const url = generatePath(USER_PATH.UPDATE_USER, pathParameters);

    const response = await jfwAxios.put<HttpResponse<IUser>>(url, body, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
