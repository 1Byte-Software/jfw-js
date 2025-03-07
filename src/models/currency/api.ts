import { RawAxiosRequestHeaders } from 'axios';
import { HttpResponseList } from '../../core';
import { get } from '../../utils/axiosHelper222';
import { CURRENCY_PATH } from './paths';
import { ICurrency, IQueryCurrencyParams } from './types';

export const queryCurrencyAPI = async (
    params: IQueryCurrencyParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<HttpResponseList<ICurrency>> => {
    const url = CURRENCY_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);

    return response.data
};
