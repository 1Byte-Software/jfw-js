import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { CITY_PATH } from './paths';
import { ICity, IQueryCityParams } from './types';

/**
 * #JFW-73: Thiếu tài liệu api/cities
 */
export const queryCityAPI = async (
    params?: IQueryCityParams,
): Promise<HttpResponseList<ICity>> => {
    const url = CITY_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });

    return response.data;
};

/**
 * #JFW-73: Thiếu tài liệu api/cities
 */
export const getCityByIdAPI = async (cityId: IdType): Promise<ICity> => {
    const url = generatePath(CITY_PATH.GET_BY_ID, {
        id: cityId,
    });
    const response = await jfwAxios.get(url);

    return response.data;
};
