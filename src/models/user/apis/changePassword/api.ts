import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { USER_PATH } from '../../paths';
import { IChangePasswordOptions } from './types';

/**
 * # Change password
 *
 * Changes the user's password.
 *
 * @param options - The options for change password.
 * @param config - Optional axios request configuration object.
 */
export const changePasswordAPI = async (
    options: IChangePasswordOptions,
    config?: AxiosRequestConfig,
) => {
    const { headerParameters, body } = options;
    const url = USER_PATH.CHANGE_PASSWORD;

    const response = await jfwAxios.put<HttpResponse<true>>(url, body, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
