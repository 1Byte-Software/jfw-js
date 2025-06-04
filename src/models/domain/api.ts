import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { DOMAIN_PATH } from './paths';
import {
    ICreateDomainParams,
    IDomain,
    IGetDomainsParams,
    IUpdateDomainParams,
} from './types';

/**
 * # Delete a Coupon
 *
 * Delete a domain
 *
 * @param id - The id of the domain
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/delete-a-domain}
 */
export const deleteDomainAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(DOMAIN_PATH.DELETE_DOMAIN, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get domains
 *
 * Get domains
 *
 * @param params - The params for getting domains.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/get-domains}
 */
export const getDomainsAPI = async (
    params?: IGetDomainsParams,
    config?: AxiosRequestConfig,
) => {
    const url = DOMAIN_PATH.GET_DOMAINS;
    const response = await jfwAxios.get<HttpResponseList<IDomain>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Get a domain
 *
 * Get a domain
 *
 * @param id - The id of the domain.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/get-a-domain}
 */
export const getCoupon = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(DOMAIN_PATH.GET_DOMAIN, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IDomain>>(url, config);

    return response.data;
};

/**
 * # Create a Domain
 *
 * Creates a new domain.
 *
 * @param params - The params for creating a domain.
 * @param config - Optional axios request configuration object.
 * @see {@link }
 */
export const createDomainAPI = async (
    data: ICreateDomainParams,
    config?: AxiosRequestConfig,
) => {
    const url = DOMAIN_PATH.CREATE_DOMAIN;
    const response = await jfwAxios.post<HttpResponse<IDomain>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * # Update a Domain
 *
 * Updates a domain by the given id.
 *
 * @param id - The id of the domain.
 * @param params - The params for updating a domain.
 * @param config - Optional axios request configuration object.
 * @see {@link }
 */
export const updateDomainAPI = async (
    id: IdType,
    data: IUpdateDomainParams,
) => {
    const url = generatePath(DOMAIN_PATH.UPDATE_DOMAIN, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(url, data);

    return response.data;
};
