import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IUnlockUserParameters } from './types';

/**
 * # Unlock a user
 *
 * Unlock a user with a `Locked` status or a user with an `Active` status who is blocked from unknown devices. Unlocked users have an `Active` status and can sign in with their current password.
 *
 * @param options - The options for unlock a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/unlock-a-user}
 */
export const unlockUserAPI = async (
    options: IUnlockUserParameters,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.UNLOCK_USER, pathParameters);

    const response = await jfwAxios.post<HttpResponse<true>>(url, null, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
