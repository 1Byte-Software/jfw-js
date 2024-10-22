import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddPricePayload,
  IById,
  IGenerateCheckoutLinkParams,
  IGetListPricesParams,
  IPrice,
} from '../models/interfaces';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'prices';
const REST_V1 = 'v1/prices';
const LINK = 'generate-checkout-link';

export const generateCheckoutLink = async (
  path: IById,
  params: IGenerateCheckoutLinkParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${LINK}`;
  const response = await post(
    url,
    null,
    {
      params,
    },
    userHeaders,
  );
  return response.data;
};

export const getListPricesAPI = async (
  params: IGetListPricesParams,
): Promise<IPrice[]> => {
  const url = `${REST_V1}`;
  const response = await get(url, {
    params,
  });
  return response.data;
};

export const getPriceDetailsAPI = async (path: IById): Promise<IPrice> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);
  return response.data;
};

export const addPriceAPI = async (payload: IAddPricePayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);
  return response.data;
};

export const editPriceAPI = async (path: IById, payload: IAddPricePayload) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);
  return response.data;
};

export const deletePriceAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url);
  return response.data;
};
