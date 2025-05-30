import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { IRole } from '../../../role';
import { USER_PATH } from '../../paths';
import { IGetRolesAssignedToUserOptions } from './types';

/**
 * #NOTE: Waiting document.
 */
export const getRolesAssignedToUserAPI = async (
    options: IGetRolesAssignedToUserOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, headerParameters } = options;
    const url = generatePath(USER_PATH.GET_ROLES_ASSIGNED_TO_USER, pathParameters);

    const response = await jfwAxios.get<HttpResponse<IRole[]>>(url, {
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
