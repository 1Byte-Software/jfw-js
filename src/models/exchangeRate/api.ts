import { AxiosRequestConfig } from 'axios';
import { HttpResponse } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { EXCHANGE_RATE_PATH } from './paths';
import { IConvertCurrencyParams, IExchangeRate } from './types';

export class ExchangeRateAPI extends AbstractAPI {
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
    public async getExchangeRates(config?: AxiosRequestConfig) {
        const url = EXCHANGE_RATE_PATH.GET_EXCHANGE_RATES;
        const response = await this.axios.get<HttpResponse<IExchangeRate[]>>(
            url,
            config,
        );

        return response.data;
    }

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
    public async convertCurrency(
        params: IConvertCurrencyParams,
        config?: AxiosRequestConfig,
    ) {
        const url = EXCHANGE_RATE_PATH.CONVERT_CURRENCY;
        const response = await this.axios.get<HttpResponse<number>>(url, {
            params,
            ...config,
        });

        return response.data;
    }
}
