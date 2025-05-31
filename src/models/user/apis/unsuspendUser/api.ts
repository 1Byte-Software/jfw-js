import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IUnsuspendUserParameters } from './types';

/**
 * # Unsuspend a user
 *
 * Unsuspend a user and return them to the `Active` status. This operation can only be performed on users with a `Suspended` status.
 *
 * @param options - The options for unsuspend a user.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/unsuspend-a-user}
 */
export const unsuspendUserAPI = async (
    options: IUnsuspendUserParameters,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.UNSUSPEND_USER, pathParameters);

    const response = await jfwAxios.post<HttpResponse<true>>(url, null, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
