import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../core';
import { jfwAxios } from '../../../core/client/client';
import { generatePath } from '../../../utils/path';
import { IdType } from '../../base';
import { EMAIL_ADDRESS_PATH } from './paths';
import {
    ICreateEmailAddressParams,
    IDeleteEmailAddressParams,
    IEmailAddress,
    IGetEmailAddressParams,
    IUpdateEmailAddressParams,
} from './types';

/**
 * # Create an email address
 *
 * Create an email address by brand
 *
 * @param params - The params for creating an email address.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/create-an-email-address}
 */
export const createEmailAddress = async (
    params: ICreateEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const { brandId, ...restParams } = params;
    const url = generatePath(EMAIL_ADDRESS_PATH.CREATE_EMAIL_ADDRESS, {
        brandId,
    });
    const response = await jfwAxios.post<HttpResponse<IEmailAddress>>(
        url,
        params,
        config,
    );

    return response.data;
};

/**
 * # Delete an email address
 *
 * Delete an email address
 *
 * @param params - The params for deleting email address.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/delete-an-email-address}
 */
export const deleteEmailAddress = async (
    params: IDeleteEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EMAIL_ADDRESS_PATH.DELETE_EMAIL_ADDRESS, params);
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * # Get an email address
 *
 * Get an email address
 *
 * @param id - The id of the device.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-an-email-address}
 */
export const getEmailAddress = async (
    params: IGetEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EMAIL_ADDRESS_PATH.GET_EMAIL_ADDRESS, params);
    const response = await jfwAxios.get<HttpResponse<IEmailAddress>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Get email addresses
 *
 * Get email addresses by brand
 *
 * @param brandId - The id of the brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/get-email-addresses}
 */
export const getEmailAddresses = async (
    brandId: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(EMAIL_ADDRESS_PATH.GET_EMAIL_ADDRESSES, {
        brandId,
    });
    const response = await jfwAxios.get<HttpResponse<IEmailAddress[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * # Update an email address
 *
 * Update an email address
 *
 * @param emailAddressId - The id of the email address.
 * @param params - The id of the brand.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/brands/email-addresses/update-an-email-address}
 */
export const updateEmailAddress = async (
    emailAddressId: IdType,
    params: IUpdateEmailAddressParams,
    config?: AxiosRequestConfig,
) => {
    const { brandId, ...restParams } = params;
    const url = generatePath(EMAIL_ADDRESS_PATH.UPDATE_EMAIL_ADDRESS, {
        brandId,
        emailAddressId,
    });
    const response = await jfwAxios.put<HttpResponse<IEmailAddress>>(
        url,
        restParams,
        config,
    );

    return response.data;
};
