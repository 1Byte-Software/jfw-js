import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CRYPTOGRAPHY_PATH } from './paths';
import { IDecryptData, IEncryptData } from './types';

/**
 * Decrypts a string. This is a simple decryption method and should not be used for sensitive data.
 *
 * @param data - The data for decrypting text.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/reame/decrypt}
 */
export const decryptAPI = async (
    data: IDecryptData,
    config?: AxiosRequestConfig,
) => {
    const url = CRYPTOGRAPHY_PATH.DECRYPT;
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        data,
        config,
    );

    return response.data;
};

/**
 * Encrypts a string. This is a simple encryption method and should not be used for sensitive data.
 *
 * @param data - The data for encrypting text.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/reame/encrypt}
 */
export const encryptAPI = async (
    data: IEncryptData,
    config?: AxiosRequestConfig,
) => {
    const url = CRYPTOGRAPHY_PATH.ENCRYPT;
    const response = await jfwAxios.post<HttpResponse<string>>(
        url,
        data,
        config,
    );

    return response.data;
};
