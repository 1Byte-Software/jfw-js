import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_PROFILE_PATH } from './paths';
import { IBrandEmailAddress, IUpdateEmailAddressParams } from './types';

/**
 * Gets brand email addresses by the given brand id.
 */
export const getBrandEmailAddressAPI = async (
    brandId: IdType,
    config?: AxiosRequestConfig,
): Promise<IBrandEmailAddress> => {
    const url = generatePath(BRAND_PROFILE_PATH.GET, {
        id: brandId,
    });

    const response = await jfwAxios.get(url, config);

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

    const response = await jfwAxios.put(url, payload);

    return response.data;
};
