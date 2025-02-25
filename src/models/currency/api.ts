import { RawAxiosRequestHeaders } from 'axios';
import { get } from '../../utils/axiosHelper';
import { IListResponse } from '../base';
import { CURRENCY_PATH } from './paths';
import { ICurrency, IQueryCurrencyParams } from './types';

export const queryCurrencyAPI = async (
    params: IQueryCurrencyParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<ICurrency>> => {
    const url = CURRENCY_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
};
