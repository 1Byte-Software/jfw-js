import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_PROFILE_PATH } from './paths';
import { IUpdateBrandProfileParams } from './types';
import { AbstractAPI } from '../../base/AbstractAPI';

export class BrandProfileAPI extends AbstractAPI {
    /**
     * # Update a brand's profile
     *
     * Updates a brand's profile by the given brand id.
     *
     * @param id - The id of the brand.
     * @param params - The params for updating the brand's profile.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-brand-profile}
     */
    public async updateBrandProfile(
        id: IdType,
        params: IUpdateBrandProfileParams,
        config?: AxiosRequestConfig,
    ) {
        const url = generatePath(BRAND_PROFILE_PATH.UPDATE_BRAND_PROFILE, {
            id,
        });
        const response = await this.axios.put<HttpResponse<boolean>>(
            url,
            params,
            config,
        );

        return response.data;
    }
}
