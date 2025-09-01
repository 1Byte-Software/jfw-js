import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CITY_PATH } from './paths';
import { ICity, IGetCitiesParams } from './types';

export class CityAPI {
    /**
     * # Cities
     *
     * Gets a list of all cities.
     *
     * @param params - The parameters for getting cities
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cities}
     */
    public async getCities(
        params?: IGetCitiesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = CITY_PATH.GET_CITIES;
        const response = await jfwAxios.get<HttpResponseList<ICity>>(url, {
            params,
            ...config,
        });

        return response.data;
    }
}
