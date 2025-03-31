import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_PROFILE_PATH } from './paths';
import { IBrandProfile } from './types';

/**
 * Updates a brand profile by the given brand id.
 */
export const updateBrandProfileAPI = async (
    id: IdType,
    payload: IBrandProfile,
) => {
    const url = generatePath(BRAND_PROFILE_PATH.UPDATE, {
        id,
    });

    const response = await jfwAxios.put(url, payload);

    return response.data;
};
