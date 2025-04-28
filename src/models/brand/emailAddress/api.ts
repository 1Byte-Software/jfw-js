import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { BRAND_EMAIL_ADDRESS_PATH } from './paths';
import { IBrandEmailAddress, IUpdateEmailAddressData } from './types';

/**
 * Gets the brand's email by the given brand id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/get-emails-with-a-brand}
 */
export const getEmailsWithBrandAPI = async (
    brandId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(BRAND_EMAIL_ADDRESS_PATH.GET_EMAILS_WITH_BRAND, {
        id: brandId,
    });

    const response = await jfwAxios.get<HttpResponse<IBrandEmailAddress>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Updates the brand's emails by the given brand id.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/update-a-email}
 */
export const updateBrandEmailAddressAPI = async (
    brandId: IdType,
    data: IUpdateEmailAddressData,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(
        BRAND_EMAIL_ADDRESS_PATH.UPDATE_BRAND_EMAIL_ADDRESS,
        {
            id: brandId,
        },
    );

    const response = await jfwAxios.put<HttpResponse<IBrandEmailAddress>>(
        url,
        data,
        config,
    );

    return response.data;
};
