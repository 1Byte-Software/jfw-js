import { put } from '../../../utils/axiosHelper';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_SETTING_PATH } from './paths';
import { IBrandSetting } from './types';

/**
 * Updates a brand setting by the given brand id.
 */
export const updateBrandSettingsAPI = async (
    id: IdType,
    payload: IBrandSetting,
) => {
    const url = generatePath(BRAND_SETTING_PATH.UPDATE, {
        id,
    });

    const response = await put(url, payload);

    return response.data;
};
