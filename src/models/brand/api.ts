import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { BRAND_PATH } from './paths';
import {
    IBrand,
    ICreateBrandData,
    IGeneratedDomain,
    IGetBrandsParams,
    IUpdateBrandData,
} from './types';

/**
 * Creates a new brand.
 *
 * @param data - The data for creating a new brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/create-a-brand}
 */
export const createBrandAPI = async (
    data: ICreateBrandData,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_PATH.CREATE_BRAND;
    const response = await jfwAxios.post<HttpResponse<IBrand>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Generates a new domain name.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/generate-domain#get-api-v1-brands-generate-domain}
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
 * Get a brand based on the client domain.
 *
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-brand-by-brand-url}
 */
export const getBrandByUrlAPI = async (config?: AxiosRequestConfig) => {
    const url = BRAND_PATH.GET_BRAND_BY_URL;
    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

/**
 * Get brands by the given filter.
 *
 * @param params - The parameters for getting brands.
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
 * Updates a brand by the given id.
 *
 * @param id - The id of the brand.
 * @param data - The data for updating a brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand}
 */
export const updateBrandAPI = async (
    id: IdType,
    data: IUpdateBrandData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.UPDATE_BRAND, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Checks if a brand exists in the database.
 *
 * @param domain The domain to check.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/check-domain-exists}
 */
export const checkExistDomainUrlAPI = async (
    domain: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.CHECK_DOMAIN_IF_EXISTS, {
        domain,
    });
    const response = await jfwAxios.get<HttpResponse<boolean>>(url, config);

    return response.data;
};
