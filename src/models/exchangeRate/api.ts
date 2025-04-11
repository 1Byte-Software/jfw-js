import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { EXCHANGE_RATE_PATH } from './paths';
import { IConvertCurrencyParams, IExchangeRate } from './types';

/**
 * Gets all exchange rate in the system.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/get-exchange-rates}
 */
export const getExchangeRatesAPI = async (config?: AxiosRequestConfig) => {
    const url = EXCHANGE_RATE_PATH.GET_EXCHANGE_RATES;
    const response = await jfwAxios.get<HttpResponse<IExchangeRate[]>>(
        url,
        config,
    );

    return response.data;
};

/**
 * Convert the currency from one to another.
 *
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
