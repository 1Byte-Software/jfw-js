import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { BRAND_PATH } from './paths';
import {
    IBrand,
    ICreateBrandParams,
    IGeneratedDomain,
    IGetBrandsParams,
    IUpdateBrandParams,
} from './types';

/**
 * # Check domain if exists
 *
 * Checks if a brand exists in the system.
 *
 * We will check if the domain is already in use by another brand. Returns true if the domain is already in use, false otherwise.
 *
 * @param domain - The domain to check.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/check-domain-exists}
 */
export const checkDomainIfExists = async (
    domain: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.CHECK_DOMAIN_IF_EXISTS, {
        domain,
    });
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Create a brand
 *
 * Creates a new brand.
 *
 * @param params - The params for creating a new brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/create-a-brand}
 */
export const createBrandAPI = async (
    params: ICreateBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_PATH.CREATE_BRAND;
    const response = await jfwAxios.post<HttpResponse<IBrand>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Generate a new domain
 *
 * Generates a new domain name.
 *
 * Generates a new domain name that is not in use by any brand. The domain name will be a random alphanumeric string and will be available in the system.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/generate-domain}
 */
export const generateNewDomainAPI = async (config?: AxiosRequestConfig) => {
    const url = BRAND_PATH.GENERATE_NEW_DOMAIN;
    const response = await jfwAxios.get<HttpResponse<IGeneratedDomain>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Get a brand
 *
 * Gets brand by the given brand id.
 *
 * @param id - The id of the brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand}
 */
export const getBrandAPI = async (id: IdType, config?: AxiosRequestConfig) => {
    const url = generatePath(BRAND_PATH.GET_BRAND, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

/**
 * # Get a brand by url
 *
 * Get a brand based on the client domain or host domain.
 *
 * Get the brand information by the client domain or host domain.
 *
 * We will check the client domain first that is the domain of the client that is requesting the resource.
 *
 * If the client domain is not found, we will check the host domain.
 *
 * If the host domain is not found, return 404 error.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand-by-brand-url}
 */
export const getBrandByURLAPI = async (config?: AxiosRequestConfig) => {
    const url = BRAND_PATH.GET_BRAND_BY_URL;
    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

/**
 * # Get brands
 *
 * Get brands by the given filter.
 *
 * @param params - The params for getting brands.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-brands}
 */
export const getBrandsAPI = async (
    params?: IGetBrandsParams,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_PATH.GET_BRANDS;
    const response = await jfwAxios.get<HttpResponseList<IBrand>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * # Update a brand
 *
 * Updates a brand by the given id.
 *
 * @param id - The id of the brand.
 * @param params - The params for updating a brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand}
 */
export const updateBrandAPI = async (
    id: IdType,
    params: IUpdateBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.UPDATE_BRAND, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        params,
        config,
    );

    return response.data;
};
