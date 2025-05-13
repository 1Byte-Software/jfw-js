import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { DOMAIN_PATH } from './paths';
import { IDomain, IGetDomainsParams } from './types';

/**
 * Waiting for backend documentation, will update later
 *
 * #JFW-284
 */
export const getDomainsAPI = async (
    params?: IGetDomainsParams,
    config?: AxiosRequestConfig,
) => {
    const url = DOMAIN_PATH.GET_DOMAINS;
    const response = await jfwAxios.get<HttpResponseList<IDomain>>(url, {
        params,
    });

    return response.data;
};
