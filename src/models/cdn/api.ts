import { AxiosRequestConfig } from 'axios';
import { ICdn } from './types';
import { post } from '../../utils/axiosHelper222';

/**
 * Save the specified the file to the CDN folder with CDN file information.
 */
export const cdnUploadFileAPI = async (
    payload: FormData,
    configArg: AxiosRequestConfig = {
        headers: {},
    },
): Promise<ICdn> => {
    const url = CDN_PATH.UPLOAD_FILE;

    if (!configArg.headers?.['Content-Type'])
        configArg.headers ?? (configArg.headers = {});

    configArg.headers['Content-Type'] = 'multipart/form-data';

    const response = await post(url, payload, configArg);

    return response.data;
};
