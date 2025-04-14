import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { LANGUAGE_PATH } from './paths';
import { IGetLanguagesParams, ILanguage } from './types';

/**
 * The Languages API provides access to a list of supported languages in the system. This API allows clients to retrieve language data efficiently for localization purposes.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/languages}
 */
export const getLanguagesAPI = async (
    params?: IGetLanguagesParams,
    config?: AxiosRequestConfig,
) => {
    const url = LANGUAGE_PATH.GET_LANGUAGES;

    const response = await jfwAxios.get<HttpResponse<ILanguage[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};
