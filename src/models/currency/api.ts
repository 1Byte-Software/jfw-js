import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CURRENCY_PATH } from './paths';
import { ICurrency, IQueryCurrencyParams } from './types';

export const queryCurrencyAPI = async (
    params: IQueryCurrencyParams,
    config?: AxiosRequestConfig,
): Promise<HttpResponseList<ICurrency>> => {
    const url = CURRENCY_PATH.QUERY;
    const response = await jfwAxios.get(url, { ...config, params });

    return response.data;
};
