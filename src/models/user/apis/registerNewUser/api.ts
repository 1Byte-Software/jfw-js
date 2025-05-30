import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { USER_PATH } from '../../paths';
import { IUser } from '../../types';
import { IRegisterNewUserOptions } from './types';

/**
 * # Register a new user
 *
 * @param options - The options for updates a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/register-a-new-user}
 */
export const registerNewUserAPI = async (
    options: IRegisterNewUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { headerParameters, body } = options;
    const url = USER_PATH.REGISTER_NEW_USER;

    const response = await jfwAxios.post<HttpResponse<IUser>>(url, body, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
