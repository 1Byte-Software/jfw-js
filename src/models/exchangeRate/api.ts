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
 * # Get exchange rates
 *
 * Gets all the exchange rate in the system.
 *
 * The exchange rate is the rate of the currency to the base USD currency.
 *
 * @param params - The parameters for getting exchange rates.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/get-exchange-rates}
 */
export const getExchangeRates = async (
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
 * # Convert currency
 *
 * Convert the currency from one to another.
 *
 * Convert the amount from one currency to another. Returns the converted amount.
 *
 * @param params - The parameters for converting currency from one type to another.
 * @param config - Optional axios request configuration object.
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/exchange-rates/convert-currency}
 */
export const convertCurrency = async (
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
