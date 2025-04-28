import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_SETTING_PATH } from './paths';
import { IUpdateBrandSettingData } from './types';

/**
 * Updates a brand setting by the given brand id.
 */
export const updateBrandSettingAPI = async (
    id: IdType,
    data: IUpdateBrandSettingData,
) => {
    const url = generatePath(BRAND_SETTING_PATH.UPDATE_BRAND_SETTING, {
        id,
    });

    const response = await jfwAxios.put<HttpResponse<boolean>>(url, data);

    return response.data;
};
