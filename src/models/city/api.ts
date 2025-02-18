import { get } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
import { CITY_PATH } from './paths';
import { ICity, IQueryCityParams } from './types';

/**
 * #JFW-73: Thiếu tài liệu api/cities
 */
export const queryCityAPI = async (
    params?: IQueryCityParams,
): Promise<IListResponse<ICity>> => {
    const url = CITY_PATH.QUERY;
    const response = await get(url, {
        params,
    });
    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};

/**
 * #JFW-73: Thiếu tài liệu api/cities
 */
export const getCityByIdAPI = async (cityId: IdType): Promise<ICity> => {
    const url = generatePath(CITY_PATH.GET_BY_ID, {
        id: cityId,
    });
    const response = await get(url);

    return response.data;
};
