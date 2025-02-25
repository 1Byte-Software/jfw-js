import { AxiosHeaders } from 'axios';
import { get, put } from '../../../utils/axiosHelper';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_PROFILE_PATH } from './paths';
import { IBrandEmailAddress, IUpdateEmailAddressParams } from './types';

/**
 * Gets brand email addresses by the given brand id.
 */
export const getBrandEmailAddressAPI = async (
    brandId: IdType,
    userHeaders?: AxiosHeaders,
): Promise<IBrandEmailAddress> => {
    const url = generatePath(BRAND_PROFILE_PATH.GET, {
        id: brandId,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Updates the brand email addresses by the given brand id.
 */
export const updateBrandEmailAddressAPI = async (
    brandId: IdType,
    payload: IUpdateEmailAddressParams,
) => {
    const url = generatePath(BRAND_PROFILE_PATH.UPDATE, {
        id: brandId,
    });

    const response = await put(url, payload);

    return response.data;
};
