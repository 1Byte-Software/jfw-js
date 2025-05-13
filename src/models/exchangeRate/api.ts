import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { EXCHANGE_RATE_PATH } from './paths';
import {
    IConvertCurrencyParams,
    IExchangeRate,
    IGetExchangeRatesParams,
} from './types';

/**
 * Gets all exchange rate in the system.
 *
 * @param params - The parameters for getting all exchange rates.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/get-exchange-rates}
 */
export const getExchangeRatesAPI = async (
    params?: IGetExchangeRatesParams,
    config?: AxiosRequestConfig,
) => {
    const url = EXCHANGE_RATE_PATH.GET_EXCHANGE_RATES;
    const response = await jfwAxios.get<HttpResponse<IExchangeRate[]>>(url, {
        params,
        ...config,
    });

    return response.data;
};

/**
 * Convert the currency from one to another.
 *
 * @param params - The parameters for converting currency from one type to another.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/convert-currency}
 */
export const convertCurrencyAPI = async (
    params: IConvertCurrencyParams,
    config?: AxiosRequestConfig,
) => {
    const url = EXCHANGE_RATE_PATH.CONVERT_CURRENCY;
    const response = await jfwAxios.get<HttpResponse<number>>(url, {
        params,
        ...config,
    });

    return response.data;
};
