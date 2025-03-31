import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { CDN_PATH } from './paths';
import { ICdn } from './types';
import { HttpResponse } from '../../core';

/**
 * Save the specified the file to the CDN folder with CDN file information.
 */
export const uploadFileCDN = async (
    data: FormData,
    config?: AxiosRequestConfig,
): Promise<HttpResponse<ICdn>> => {
    const url = CDN_PATH.UPLOAD_FILE;

    if (!config.headers?.['Content-Type'])
        config.headers ?? (config.headers = {});

    config.headers['Content-Type'] = 'multipart/form-data';

    const response = await jfwAxios.post(url, data, config);

    return response.data;
};
