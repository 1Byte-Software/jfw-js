import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IUser } from '../../types';
import { IGetUserOptions, IGetUserParameters } from './types';

/**
 * # Gets a user
 *
 * Gets the user information for the given id.
 *
 * @param options - The options for gets a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/get-a-user}
 */
export const getUserAPI = async (
    options: IGetUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.GET_USER, pathParameters);

    const response = await jfwAxios.get<HttpResponse<IUser>>(url, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
