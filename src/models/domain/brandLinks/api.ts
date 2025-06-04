import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BrandLinkType } from './constants';
import { BRAND_LINK_PATH } from './paths';
import {
    IBrandLink,
    ICreateBrandLinkParams,
    IGetBrandLinkParams,
    IGetBrandLinksByTypeParams,
    IGetBrandLinksParams,
    IUpdateBrandLinkParams,
} from './types';

/**
 * # Create a brand link
 *
 * Creates a new brand link.
 *
 * @param id - The id of the domain.
 * @param params - The params for creating a new brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/create-a-brand-link}
 */
export const createBrandLinkAPI = async (
    id: IdType,
    params: ICreateBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.CREATE_BRAND_LINK, {
        id,
    });
    const response = await jfwAxios.post<HttpResponse<IBrandLink>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete a brand link
 *
 * Deletes a brand link by the given id.
 *
 * @param id - The id of the domain.
 * @param brandLinkId - The id of the brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/delete-a-brand-link}
 */
export const deleteBrandLinkAPI = async (
    id: IdType,
    brandLinkId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.DELETE_BRAND_LINK, {
        id,
        brandLinkId,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get a brand link
 *
 * Get a brand link by the given id.
 *
 * @param params - The params for getting a brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-a-brand-link}
 */
export const getBrandLinkAPI = async (
    params: IGetBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const { id, brandLinkId } = params;
    const url = generatePath(BRAND_LINK_PATH.GET_BRAND_LINK, {
        id,
        brandLinkId,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink>>(url, config);

    return response.data;
};

/**
 * # Get brand links by type
 *
 * Gets links by type.
 *
 * @param id - The id of the domain.
 * @param type - The type of the brand link.
 * @param params - The params for filter brand links (optional).
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links-by-type}
 */
export const getBrandLinksByTypeAPI = async (
    id: IdType,
    type: BrandLinkType,
    params: IGetBrandLinksByTypeParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.GET_BRAND_LINKS_BY_TYPE, {
        id,
        type,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Get brand links
 *
 * Gets brand links by the given brand id.
 *
 * We will get the domain from the request or from BrandUrl header request to filter the domain links.
 *
 * @param id - This is the domain id to filter.
 * @param params - The params for getting brand links.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links}
 */
export const getBrandLinksAPI = async (
    id: IdType,
    params: IGetBrandLinksParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.GET_BRAND_LINKS, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * # Update a brand link
 *
 * Updates a brand by the given id.
 *
 * @param id - The id of the domain.
 * @param brandLinkId - The id of the brand link.
 * @param params - The params for updating a brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/update-a-brand-link}
 */
export const updateBrandLinkAPI = async (
    id: IdType,
    brandLinkId: IdType,
    params: IUpdateBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.UPDATE_BRAND_LINK, {
        id,
        brandLinkId,
    });
    const response = await jfwAxios.put<HttpResponse<IBrandLink>>(
        url,
        params,
        config,
    );

    return response.data;
};
