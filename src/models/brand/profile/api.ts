import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { IUpdateBrandData } from '../types';
import { BRAND_PROFILE_PATH } from './paths';

/**
 * Updates a brand's profile by the given brand id.
 */
export const updateBrandProfileAPI = async (
    id: IdType,
    data: IUpdateBrandData,
) => {
    const url = generatePath(BRAND_PROFILE_PATH.UPDATE_BRAND_PROFILE, {
        id,
    });

    const response = await jfwAxios.put<HttpResponse<boolean>>(url, data);

    return response.data;
};
