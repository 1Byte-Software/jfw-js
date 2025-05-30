import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../../../core';
import { jfwAxios } from '../../../../core/client/client';
import { generatePath } from '../../../../utils/path';
import { USER_PATH } from '../../paths';
import { IEmailAddressVerificationOptions } from './types';

/**
 * # Email address verification
 *
 * Sends the email to verify user's email address.
 *
 * The email will contain a link to verify the email address.
 *
 * @param options - The options for email address verification.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/users/verify-user-email#verify-user-email-address}
 */
export const emailAddressVerificationAPI = async (
    options: IEmailAddressVerificationOptions,
    config?: AxiosRequestConfig,
) => {
    const { pathParameters, queryParameters, headerParameters } = options;
    const url = generatePath(
        USER_PATH.EMAIL_ADDRESS_VERIFICATION,
        pathParameters,
    );

    const response = await jfwAxios.post<HttpResponse<true>>(url, null, {
        params: queryParameters,
        headers: {
            ...headerParameters,
            ...config?.headers,
        },
        ...config,
    });

    return response.data;
};
