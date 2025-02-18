import { AxiosHeaders } from 'axios';
import { get, post, put, remove } from '../../../utils/axiosHelper';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../asdas';
import { BRAND_LINK_PATH } from './paths';
import {
    IBrandLink,
    ICreateBrandLinkParams,
    IGetBrandLinkByTypeParams,
    IUpdateBrandLinkParams,
} from './types';

/**
 * Gets brand links by the given brand id.
 */
export const getBrandLinkAPI = async (
    brandId?: IdType,
    userHeaders?: AxiosHeaders,
): Promise<IBrandLink[]> => {
    const url = generatePath(BRAND_LINK_PATH.GET_BY_BRAND, {
        id: brandId,
    });
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Get links by brand id and type.
 */
export const getBrandLinkByTypeAPI = async (
    params: IGetBrandLinkByTypeParams,
    userHeaders?: AxiosHeaders,
): Promise<IBrandLink[]> => {
    const { brandId, type } = params;
    const url = generatePath(BRAND_LINK_PATH.GET_BY_TYPE, {
        id: brandId,
        type,
    });
    const response = await get(url, { params }, userHeaders);

    return response.data;
};

/**
 * Creates a new Link.
 */
export const createBrandLinkAPI = async (payload: ICreateBrandLinkParams) => {
    const url = BRAND_LINK_PATH.CREATE;
    const response = await post(url, payload);

    return response.data;
};

/**
 * Updates a brand link by the given id.
 */
export const updateBrandLinkAPI = async (
    brandId: IdType,
    payload: IUpdateBrandLinkParams,
) => {
    const url = generatePath(BRAND_LINK_PATH.UPDATE_BY_ID, {
        id: brandId,
    });
    const response = await put(url, payload);

    return response.data;
};

/**
 * Gets brand links by the given id.
 */
export const getBrandLinkByIdAPI = async (
    brandId: IdType,
): Promise<IBrandLink> => {
    const url = generatePath(BRAND_LINK_PATH.GET_BY_ID, {
        id: brandId,
    });

    const response = await get(url);

    return response.data;
};

/**
 * Deletes a brand link by the given id.
 */
export const deleteBrandLinkByIdAPI = async (brandId: IdType) => {
    const url = generatePath(BRAND_LINK_PATH.DELETE_BY_ID, {
        id: brandId,
    });

    const response = await remove(url);

    return response.data;
};
