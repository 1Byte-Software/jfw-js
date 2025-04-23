import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CITY_PATH } from './paths';
import { ICity, IGetCitiesParams } from './types';

/**
 * Gets a list of all cities.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/cities}
 */
export const getCitiesAPI = async (params?: IGetCitiesParams) => {
    const url = CITY_PATH.QUERY;
    const response = await jfwAxios.get<HttpResponseList<ICity>>(url, {
        params,
    });

    return response.data;
};
