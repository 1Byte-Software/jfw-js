import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CRYPTOGRAPHY_PATH } from './paths';

export class CryptographyAPI {
    /**
     * # Decrypt
     *
     * Decrypts a string.
     *
     * This is a simple decryption method and should not be used for sensitive data.
     * The decryption is not secure and should not be used for sensitive data.
     *
     * @param cipherText - (min: 1) The cipher text to decrypt.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/reame/decrypt}
     */
    public async decrypt(cipherText: string, config?: AxiosRequestConfig) {
        const url = CRYPTOGRAPHY_PATH.DECRYPT;
        const response = await jfwAxios.post<HttpResponse<string>>(
            url,
            {
                cipherText,
            },
            config,
        );

        return response.data;
    }

    /**
     * # Encrypt
     *
     * Encrypts a string.
     *
     * This is a simple encryption method and should not be used for sensitive data.
     * The encryption is not secure and should not be used for sensitive data.
     *
     * @param plainText - The plain text to encrypt.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/reame/encrypt}
     */
    public async encrypt(plainText: string, config?: AxiosRequestConfig) {
        const url = CRYPTOGRAPHY_PATH.ENCRYPT;
        const response = await jfwAxios.post<HttpResponse<string>>(
            url,
            {
                plainText,
            },
            config,
        );

        return response.data;
    }
}
