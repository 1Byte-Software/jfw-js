import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CDN_PATH } from './paths';
import { ICDN, IUploadCDNData } from './types';

/**
 * Save the specified the file to the CDN folder with CDN file information.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn}
 */
export const uploadFileCDN = async (
    data: FormData,
    config?: AxiosRequestConfig,
): Promise<HttpResponse<ICDN>> => {
    const url = CDN_PATH.UPLOAD_FILE;

    if (!config.headers?.['Content-Type'])
        config.headers ?? (config.headers = {});

    config.headers['Content-Type'] = 'multipart/form-data';

    const response = await jfwAxios.post(url, data, config);

    return response.data;
};

/**
 * Save the specified the file to the CDN folder with CDN file information.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn}
 */
export const uploadFileCDNV2 = async (
    data: IUploadCDNData,
    config?: AxiosRequestConfig,
) => {
    const url = CDN_PATH.UPLOAD_FILE;
    const formData = new FormData();

    if (data) {
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key] as string);
        });
    }

    const response = await jfwAxios.post<HttpResponse<ICDN>>(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            ...config.headers,
        },
        ...config,
    });

    return response.data;
};
