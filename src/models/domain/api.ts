import { AxiosRequestConfig } from 'axios';
import {
    IDomain,
    ICreateDomainData,
    IGetDomainsParams,
    IUpdateDomainData,
} from './types';
import { DOMAIN_PATH } from './paths';
import { jfwAxios } from '../../core/client/client';
import { HttpResponse, HttpResponseList } from '../../core';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';

/**
 * Waiting for backend documentation, will update later
 * #JFW-359
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
 * #NOTE: This API will update in the feature.
 */
export const createDomainAPI = async (
    data: ICreateDomainData,
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
 * #NOTE: This API will update in the feature.
 */
export const updateDomainAPI = async (
    id: IdType,
    data: IUpdateDomainData,
) => {
    const url = generatePath(DOMAIN_PATH.UPDATE_DOMAIN, {
        id,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(url, data);

    return response.data;
};

/**
 * #NOTE: This API will update in the feature.
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
