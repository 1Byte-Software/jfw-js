import { RawAxiosRequestHeaders } from 'axios';
import { IPaymentProvider } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'payment-providers';

export const getListPaymentProvidersAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IPaymentProvider[]> => {
  const url = `${REST}`;
  const response = await get(url, null, userHeaders);

  return response.data.items;
};
