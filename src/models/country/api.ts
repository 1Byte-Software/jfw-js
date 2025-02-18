import { get } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType } from '../asdas';
import { IListResponse } from '../interfaces';
import { COUNTRY_PATH } from './paths';
import { ICountry, IQueryCountryParams } from './types';

/**
 * #JFW-71: Thiếu tài liệu api/countries
 */
export const queryCountryAPI = async (
    params?: IQueryCountryParams,
): Promise<IListResponse<ICountry>> => {
    const url = COUNTRY_PATH.QUERY;
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
 * #JFW-71: Thiếu tài liệu api/countries
 */
export const getCountryByIdAPI = async (
    countryId: IdType,
): Promise<ICountry> => {
    const url = generatePath(COUNTRY_PATH.GET_BY_ID, {
        id: countryId,
    });
    const response = await get(url);

    return response.data;
};
