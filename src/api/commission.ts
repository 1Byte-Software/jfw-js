import {
  IAddCommissionRatePayload,
  IByCode,
  ICommissionRate,
  IGetCommissionDiscountParams,
  IGetListCommissionRatesParams,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'v1/commission-rates';

export const getCommissionDiscountAPI = async (
  params?: IGetCommissionDiscountParams,
): Promise<number> => {
  const url = `${REST}/get-discount`;

  const response = await get(url, {
    params,
  });

  return response.data;
};

export const getCommissionRatesAPI = async (
  params?: IGetListCommissionRatesParams,
): Promise<ICommissionRate[]> => {
  const url = `${REST}`;

  const response = await get(url, {
    params,
  });

  return response.data;
};

export const getCommissionRateDetailsAPI = async (
  path: IByCode,
): Promise<ICommissionRate> => {
  const { code } = path;
  const url = `${REST}/${code}`;
  const response = await get(url);

  return response.data;
};

export const addCommissionRateAPI = async (
  payload?: IAddCommissionRatePayload,
) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editCommissionRateAPI = async (
  path: IByCode,
  payload?: IAddCommissionRatePayload,
) => {
  const { code } = path;
  const url = `${REST}/${code}`;
  const response = await put(url, payload);

  return response.data;
};

export const deleteCommissionRateAPI = async (path: IByCode) => {
  const { code } = path;
  const url = `${REST}/${code}`;

  const response = await remove(url);

  return response.data;
};
