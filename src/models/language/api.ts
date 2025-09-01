import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { LANGUAGE_PATH } from './paths';
import { ILanguage } from './types';

export class LanguageAPI {
    /**
     * # Gets all languages.
     *
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/languages}
     */
    public async getLanguages(config?: AxiosRequestConfig) {
        const url = LANGUAGE_PATH.GET_LANGUAGES;
        const response = await jfwAxios.get<HttpResponse<ILanguage[]>>(
            url,
            config,
        );

        return response.data;
    }
}
