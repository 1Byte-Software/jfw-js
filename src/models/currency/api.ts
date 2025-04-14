import { AxiosRequestConfig } from 'axios';
import { HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { CURRENCY_PATH } from './paths';
import { ICurrency, IGetCurrenciesParams } from './types';

/**
 * Gets a list of all currencies in the system.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/get-currencies}
 */
export const getCurrenciesAPI = async (
    params?: IGetCurrenciesParams,
    config?: AxiosRequestConfig,
) => {
    const url = CURRENCY_PATH.GET_CURRENCIES;

    const response = await jfwAxios.get<HttpResponseList<ICurrency>>(url, {
        ...config,
        params,
    });

    return response.data;
};
