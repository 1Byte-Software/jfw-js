import { axiosInstanceJfw } from '../config/axios/axiosClient';
import {
  ICurrency,
  IExchangeRate,
  IGetListCurrenciesParams,
  IListResponse,
} from '../models/interfaces';

const REST = 'currencies';
const REST_RATE = 'v1/exchange-rates';

export const getListCurrenciesAPI = async (
  params: IGetListCurrenciesParams,
): Promise<IListResponse<ICurrency>> => {
  const url = `${REST}`;
  const response = await axiosInstanceJfw.get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getListExchangeRatesAPI = async (): Promise<IExchangeRate[]> => {
  const url = `${REST_RATE}`;
  const response = await axiosInstanceJfw.get(url);

  return response.data;
};
