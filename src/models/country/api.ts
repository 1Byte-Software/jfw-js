import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { COUNTRY_PATH } from './paths';
import { ICountry, IQueryCountryParams } from './types';

/**
 * #JFW-71: Thiếu tài liệu api/countries
 */
export const queryCountryAPI = async (
    params?: IQueryCountryParams,
): Promise<HttpResponseList<ICountry>> => {
    const url = COUNTRY_PATH.QUERY;
    const response = await jfwAxios.get(url, {
        params,
    });
    return response.data
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
    const response = await jfwAxios.get(url);

    return response.data;
};
