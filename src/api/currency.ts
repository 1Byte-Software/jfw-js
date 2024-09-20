import { RawAxiosRequestHeaders } from 'axios';
import {
  ICurrency,
  IExchangeRate,
  IGetListCurrenciesParams,
  IListResponse,
} from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'currencies';
const REST_RATE = 'v1/exchange-rates';

export const getListCurrenciesAPI = async (
  params: IGetListCurrenciesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<ICurrency>> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getListExchangeRatesAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IExchangeRate[]> => {
  const url = `${REST_RATE}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};
