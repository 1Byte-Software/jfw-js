import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { LANGUAGE_PATH } from './paths';
import { ILanguage } from './types';

/**
 * Gets languages
 */
export const queryLanguageAPI = async (config?: AxiosRequestConfig) => {
    const url = LANGUAGE_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponse<ILanguage[]>>(url, config);
    return response.data;
};
