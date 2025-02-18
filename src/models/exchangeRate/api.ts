import { RawAxiosRequestHeaders } from 'axios';
import { IExchangeRate } from './types';
import { EXCHANGE_RATE_PATH } from './paths';
import { get } from '../../utils/axiosHelper';

/**
 * Gets all exchange rate in the system.
 */
export const getExchangeRateAPI = async (
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IExchangeRate[]> => {
    const url = EXCHANGE_RATE_PATH.GET;
    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * Converts a currency to another currency.
 * @feature will make in feature
 */
export const convertCurrencyAPI = async () => {
    const url = EXCHANGE_RATE_PATH.CONVERT;
};
