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
    IGetQueryBrandParams,
    IUpdateBrandData,
} from './types';

/**
 * List all brands.
 */
export const queryBrandAPI = async (
    params?: IGetQueryBrandParams,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponseList<IBrand>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Gets brand by the given brand url.
 */
export const getBrandByUrlAPI = async (config?: AxiosRequestConfig) => {
    const url = BRAND_PATH.GET_BY_URL;

    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

/**
 * Gets brand by the given brand id.
 */
export const getBrandByIdAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.GET_BY_ID, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IBrand>>(url, config);

    return response.data;
};

export const createBrandAPI = async (
    data: ICreateBrandData,
    config?: AxiosRequestConfig,
) => {
    const url = BRAND_PATH.CREATE;

    const response = await jfwAxios.post<HttpResponse<IBrand>>(
        url,
        data,
        config,
    );

    return response.data;
};

export const updateBrandAPI = async (
    id: IdType,
    data: IUpdateBrandData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.UPDATE_BY_ID, {
        id,
    });

    // #NOT_SURE: HttpResponse<null>
    const response = await jfwAxios.put<HttpResponse<null>>(url, data, config);

    return response.data;
};

export const checkExistDomainUrlAPI = async (
    domainUrl: string,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_PATH.CHECK_DOMAIN_EXISTS, {
        domainUrl,
    });

    const response = await jfwAxios.get<HttpResponse<boolean>>(url, config);

    return response.data;
};

export const generateDomainAPI = async (config?: AxiosRequestConfig) => {
    const url = BRAND_PATH.GENERATE_DOMAIN;

    const response = await jfwAxios.get<HttpResponse<IGeneratedDomain>>(
        url,
        config,
    );

    return response.data;
};
