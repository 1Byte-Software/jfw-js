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
 * @param domainId - The id of the domain.
 * @param params - The params for creating a new brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/create-a-brand-link}
 */
export const createBrandLink = async (
    domainId: IdType,
    params: ICreateBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.CREATE_BRAND_LINK, {
        domainId,
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
 * @param domainId - The id of the domain.
 * @param brandLinkId - The id of the brand link.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/delete-a-brand-link}
 */
export const deleteBrandLink = async (
    domainId: IdType,
    brandLinkId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.DELETE_BRAND_LINK, {
        domainId,
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
export const getBrandLink = async (
    params: IGetBrandLinkParams,
    config?: AxiosRequestConfig,
) => {
    const { domainId, brandLinkId } = params;
    const url = generatePath(BRAND_LINK_PATH.GET_BRAND_LINK, {
        domainId,
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
 * @param params - The params for filter brand links (optional).
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links-by-type}
 */
export const getBrandLinksByType = async (
    params: IGetBrandLinksByTypeParams,
    config?: AxiosRequestConfig,
) => {
    const { domainId, type, ...queryParameters } = params;

    const url = generatePath(BRAND_LINK_PATH.GET_BRAND_LINKS_BY_TYPE, {
        domainId,
        type,
    });
    const response = await jfwAxios.get<HttpResponse<IBrandLink[]>>(url, {
        params: queryParameters,
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
 * @param domainId - This is the domain id to filter.
 * @param params - The params for getting brand links.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/domains/brand-links/get-brand-links}
 */
export const getBrandLinks = async (
    domainId: IdType,
    params: IGetBrandLinksParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_LINK_PATH.GET_BRAND_LINKS, {
        domainId,
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
export const updateBrandLink = async (
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
