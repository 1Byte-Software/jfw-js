import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_LINK_PATH } from './paths';
import {
    IBrandLink,
    ICreateBrandLinkData,
    IDeleteBrandLinkParams,
    IGetBrandLinkParams,
    IGetBrandLinksByTypeParams,
    IUpdateBrandLinkData,
    IUpdateLinkParams,
} from './types';

/**
 * Creates a new brand link.
 *
 * @param id - The id of the domain.
 * @param data - The data for creating a new brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/create-a-link-with-a-brand}
 */
export const createBrandLinkAPI = async (
    id: IdType,
    data: ICreateBrandLinkData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.CREATE_BRAND_LINK, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<IBrandLink>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Get a brand link by the given id.
 *
 * @param params - The params for get a brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-a-link}
 * #JFW-363
 */
export const getBrandLinkAPI = async (
    params: IGetBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const { id, brandLinkId } = params;
    const url = generatePath(BRAND_LINK_PATH.GET_LINK, {
        id,
        brandLinkId,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink>>(url, config);

    return response.data;
};

/**
 * Gets links by type.
 *
 * @param id - The id of the domain.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links-by-type}
 * #JFW-363
 */
export const getBrandLinksByTypeAPI = async (
    params: IGetBrandLinksByTypeParams,
    config?: AxiosRequestConfig,
) => {
    const { id, type } = params;
    const url = generatePath(BRAND_LINK_PATH.GET_LINKS_BY_TYPE, {
        id,
        type,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink[]>>(url, {
        ...config,
        params,
    });

    return response.data;
};

/**
 * Gets brand links by the given brand id.
 *
 * @param id - This is the domain id to filter.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-links}
 * #JFW-363
 */
export const getBrandLinksAPI = async (
    id?: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.GET_LINKS, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Updates a brand by the given id.
 *
 * @param params - The params for updating a brand link.
 * @param data - The data for updating a brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-link}
 * #JFW-363
 */
export const updateBrandLinkAPI = async (
    params: IUpdateLinkParams,
    data: IUpdateBrandLinkData,
    config?: AxiosRequestConfig,
) => {
    const { id, brandLinkId } = params;
    const url = generatePath(BRAND_LINK_PATH.UPDATE_LINK, {
        id,
        brandLinkId,
    });
    const response = await jfwAxios.put<HttpResponse<boolean>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Deletes a brand link by the given id.
 *
 * @param params - The params for deleting a brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/delete-a-link-for-a-brand}
 */
export const deleteBrandLinkAPI = async (
    params: IDeleteBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const { id, brandLinkId } = params;
    const url = generatePath(BRAND_LINK_PATH.DELETE_BRAND_LINK, {
        id,
        brandLinkId,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};
