import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { AbstractAPI } from '../base/AbstractAPI';
import { CURRENCY_PATH } from './paths';
import { ICurrency, IGetCurrenciesParams } from './types';

export class CurrencyAPI extends AbstractAPI {
    /**
     * # Currencies
     *
     * Get currencies
     *
     * @param params - The params for getting currencies.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/get-currencies}
     */
    public async getCurrencies(
        params?: IGetCurrenciesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = CURRENCY_PATH.GET_CURRENCIES;
        const response = await this.axios.get<HttpResponseList<ICurrency>>(
            url,
            {
                ...config,
                params,
            },
        );

        return response.data;
    }
}
