import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_PROFILE_PATH } from './paths';
import { IUpdateBrandProfileData } from './types';

/**
 * Updates a brand's profile by the given brand id.
 */
export const updateBrandProfileAPI = async (
    id: IdType,
    data: IUpdateBrandProfileData,
) => {
    const url = generatePath(BRAND_PROFILE_PATH.UPDATE_BRAND_PROFILE, {
        id,
    });

    const response = await jfwAxios.put<HttpResponse<boolean>>(url, data);

    return response.data;
};
