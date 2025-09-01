import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_SETTING_PATH } from './paths';
import { IUpdateBrandSettingParams } from './types';
export class BrandSettingAPI {
    /**
     * # Update a brand's setting
     *
     * Updates a brand's setting by the given brand id.
     *
     * @param id - The id of the brand.
     * @param params - The params for updating the brand's setting.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-setting}
     */
    public async updateBrandSetting(
        id: IdType,
        params: IUpdateBrandSettingParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(BRAND_SETTING_PATH.UPDATE_BRAND_SETTING, {
            id,
        });
        const response = await jfwAxios.put<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
