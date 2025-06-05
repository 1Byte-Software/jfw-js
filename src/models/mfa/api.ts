import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { MFA_PATH } from './paths';
import { IMFA } from './types';

/**
 * # Get a list of MFA
 *
 * Get multiple factor authentication methods. That is the list of MFA methods that are available for the user.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/multiple-factor-authentications/get-a-list-of-mfa}
 */
export const getListOfMFA = async (config?: AxiosRequestConfig) => {
    const url = MFA_PATH.GET_LIST_OF_MFA;
    const response = await jfwAxios.get<HttpResponse<IMFA[]>>(url, config);

    return response.data;
};
