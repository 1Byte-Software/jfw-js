import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CDN_PATH } from './paths';
import { ICDN, ICDNUpload, IGetFilesCDNParams, IUploadCDNData } from './types';
import { IdType } from '../base';
import { generatePath } from '../../utils/path';

/**
 * Delete a file CDN
 *
 * @param id - The id of the file cdn.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/delete-a-file-cdn}
 * #JFW-290
 */
export const deleteFileCDNAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CDN_PATH.DELETE_FILE_CDN, {
        id,
    });
    const response = await jfwAxios.delete<HttpResponse<boolean>>(url, config);

    return response.data;
};

/**
 * Get a file CDN.
 *
 * @param id - The id of the file cdn.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/get-a-file-cdn}
 * 
 * #JFW-293, #JFW-289
 */
export const getFileCDNAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(CDN_PATH.GET_FILE_CDN, {
        id,
    });
    const response = await jfwAxios.get<HttpResponse<ICDN>>(url, config);

    return response.data;
};

/**
 * Get cdn items
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/get-files-cdn} 
 * #JFW-293
 */
export const getFilesCDNAPI = async (
    params?: IGetFilesCDNParams,
    config?: AxiosRequestConfig,
) => {
    const url = CDN_PATH.GET_FILES_CDN;
    const response = await jfwAxios.get<HttpResponseList<ICDN>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Save the specified the file to the CDN folder with CDN file information.
 *
 * @param data - The data for uploading an file CDN.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file}
 * #JFW-293
 */
export const uploadFileCDN = async (
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

    const response = await jfwAxios.post<HttpResponse<ICDNUpload>>(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            ...config.headers,
        },
        ...config,
    });

    return response.data;
};
