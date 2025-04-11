import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { COUNTRY_PATH } from './paths';
import { ICountry, IQueryCountryParams } from './types';

/**
 * List all countries by the given filter.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/get-countries}
 */
export const getCountriesAPI = async (
    params?: IQueryCountryParams,
    config?: AxiosRequestConfig,
) => {
    const url = COUNTRY_PATH.GET_COUNTRIES;

    const response = await jfwAxios.get<HttpResponse<ICountry[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};
