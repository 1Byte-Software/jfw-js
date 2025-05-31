import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { ILockUserOptions } from './types';

/**
 * # Lock a user
 *
 * Perform this operation only on users with an `Active` status. We send a notification email to the user, and they will have an `Locked` status when the process completes.
 *
 * Locked users can't sign in to Jframework.
 *
 * @param options - The options for lock a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/lock-a-user}
 */
export const lockUserAPI = async (
    options: ILockUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.LOCK_USER, pathParameters);

    const response = await jfwAxios.post<HttpResponse<true>>(url, null, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
