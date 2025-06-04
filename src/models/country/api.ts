import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { COUNTRY_PATH } from './paths';
import { ICountry, IGetCountriesParams } from './types';

/**
 * # Countries
 *
 * Get countries
 *
 * @param params - The params for getting countries.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/get-countries}
 */
export const getCountries = async (
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
