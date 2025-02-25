import { AxiosHeaders } from 'axios';
import { IResponse } from '../../core';
import { get, put } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { BRAND_PATH } from './paths';
import { IBrand, IGetQueryBrandParams, IUpdateBrandParams } from './types';

/**
 * List all brands.
 */
export const queryBrandAPI = async (
    params?: IGetQueryBrandParams,
): Promise<IResponse<IBrand[]>> => {
    const url = BRAND_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    return response.data;
};

/**
 * Gets brand by the given brand url.
 */
export const getBrandByUrlAPI = async (
    brandUrl: string,
    userHeaders?: AxiosHeaders,
): Promise<IBrand> => {
    const url = generatePath(BRAND_PATH.GET_BY_URL, {
        brandUrl,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Gets brand by the given brand id.
 */
export const getBrandByIdAPI = async (id: IdType): Promise<IBrand> => {
    const url = generatePath(BRAND_PATH.GET_BY_ID, {
        id,
    });
    const response = await get(url);

    return response.data;
};

export const updateBrandAPI = async (
    id: IdType,
    payload: IUpdateBrandParams,
) => {
    const url = generatePath(BRAND_PATH.UPDATE_BY_ID, {
        id,
    });

    const response = await put(url, payload);

    return response.data;
};
