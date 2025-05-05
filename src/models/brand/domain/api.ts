import { AxiosRequestConfig } from 'axios';
import { IBrandDomain, IGetBrandDomainsParams } from './types';
import { BRAND_DOMAIN_PATH } from './paths';
import { HttpResponseList } from '../../../core';
import { jfwAxios } from '../../../core/client/client';

/**
 * Waiting for backend documentation, will update later
 */
export const getBrandDomainsAPI = async (
    params?: IGetBrandDomainsParams,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_DOMAIN_PATH.GET_BRAND_DOMAINS;

    const response = await jfwAxios.get<HttpResponseList<IBrandDomain>>(url, {
        ...config,
        params,
    });

    return response.data;
};
