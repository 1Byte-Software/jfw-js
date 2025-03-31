import { AxiosRequestConfig } from 'axios';
import { jfwAxios } from '../../core/client/client';
import { EXCHANGE_RATE_PATH } from './paths';
import { IExchangeRate } from './types';

/**
 * Gets all exchange rate in the system.
 */
export const getExchangeRateAPI = async (
    config?: AxiosRequestConfig,
): Promise<IExchangeRate[]> => {
    const url = EXCHANGE_RATE_PATH.GET;
    const response = await jfwAxios.get(url, config);

    return response.data;
};

/**
 * Converts a currency to another currency.
 * @feature will make in feature
 */
export const convertCurrencyAPI = async () => {
    const url = EXCHANGE_RATE_PATH.CONVERT;
};
