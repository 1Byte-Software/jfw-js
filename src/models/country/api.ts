import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { COUNTRY_PATH } from './paths';
import { ICountry, IGetCountriesParams } from './types';

/**
 * List all countries by the given filter.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/get-countries}
 */
export const getCountriesAPI = async (
    params?: IGetCountriesParams,
    config?: AxiosRequestConfig,
) => {
    const url = COUNTRY_PATH.GET_COUNTRIES;

    const response = await jfwAxios.get<HttpResponseList<ICountry>>(url, {
        params,
        ...config,
    });

    return response.data;
};
