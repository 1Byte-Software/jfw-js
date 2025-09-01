import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { HeaderKey } from '../../core/client/constants';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { CDN_PATH } from './paths';
import {
    IFileCDN,
    IUploadedFileCDN,
    IGetFilesCDNParams,
    IUploadFileParams,
} from './types';

export class CDNAPI {
    /**
     * # Delete a file CDN
     *
     * Delete a file CDN
     *
     * @param id - The id of the file cdn.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/delete-a-file-cdn}
     */
    public async deleteFileCDN(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(CDN_PATH.DELETE_FILE_CDN, {
            id,
        });
        const response = await jfwAxios.delete<HttpResponse<boolean>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get a file CDN
     *
     * Get a file CDN.
     *
     * @param id - The id of the file cdn.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/get-a-file-cdn}
     */
    public async getFileCDN(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(CDN_PATH.GET_FILE_CDN, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<IFileCDN>>(
            url,
            config,
        );

        return response.data;
    }

    /**
     * # Get files CDN
     *
     * Get cdn items
     *
     * @param params - The params for getting files CDN.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/get-files-cdn}
     */
    public async getFilesCDN(
        params?: IGetFilesCDNParams,
        config?: AxiosRequestConfig,
    ) {
        const url = CDN_PATH.GET_FILES_CDN;
        const response = await jfwAxios.get<HttpResponseList<IFileCDN>>(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Upload a file CDN
     *
     * The CdnPathType variable is the root folder of the uploaded file in the CDN.
     * By default, it is set to "User".
     * For further information, visit here: https://whitepaper.jframework.io/other-concepts/cdn/cdn-storage
     *
     * Saves the specified file to the CDN folder with CDN file information.
     *
     * @param params - The params for uploading an file CDN.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cdn/upload-file}
     */
    public async uploadFileCDN(
        params: IUploadFileParams,
        config?: AxiosRequestConfig,
    ) {
        const url = CDN_PATH.UPLOAD_FILE;
        const formData = new FormData();

        if (params) {
            Object.keys(params).forEach((key) => {
                formData.append(key, params[key] as string);
            });
        }

        const response = await jfwAxios.post<HttpResponse<IUploadedFileCDN>>(
            url,
            params,
            {
                headers: {
                    [HeaderKey.ContentType]: 'multipart/form-data',
                    ...config?.headers,
                },
                ...config,
            },
        );

        return response.data;
    }

    /**
     * @deprecated use uploadFileCDN instead
     */
    public async uploadFile(
        params: IUploadFileParams,
        config?: AxiosRequestConfig,
    ) {
        return this.uploadFileCDN(params, config);
    }
}
