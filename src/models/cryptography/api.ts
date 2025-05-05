import { jfwAxios } from '../../core/client/client';
import { CRYPTOGRAPHY_PATH } from './paths';
import { IDecryptParams, IEncryptParams } from './types';

/**
 * JFW-80: Thiếu tài liệu api/cryptographies
 */
export const encryptAPI = async (params: IEncryptParams): Promise<string> => {
    const url = CRYPTOGRAPHY_PATH.ENCRYPT;
    const response = await jfwAxios.post(url, params);
    return response.data;
};

/**
 * JFW-80: Thiếu tài liệu api/cryptographies
 */
export const decryptAPI = async (params: IDecryptParams): Promise<string> => {
    const url = CRYPTOGRAPHY_PATH.DECRYPT;
    const response = await jfwAxios.post(url, params);
    return response.data;
};
