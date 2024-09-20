import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddMoneyPayload,
  IApplyRedeemPath,
  IById,
  ICreateWalletPath,
  IEarnEvent,
  IExchangeWalletPayload,
  IGetEarnEventParams,
  IGetWalletHistoriesParams,
  IGetWalletParams,
  IListResponse,
  IWallet,
  IWalletHistory,
} from '../models/interfaces';
import { get, post, put } from '../utils/axiosHelper';

const REST = 'wallets';
const ADD_MONEY = 'add-money/checkout-link';
const APPLY_REDEEM = 'apply-redeem';
const CLOSE = 'close';
const CONVERT = 'convert';
const HISTORY = 'histories';
const REST_EVENT = 'wallet-earning-events';

export const getWalletAPI = async (
  params: IGetWalletParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IWallet[]> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const getWalletHistoriesAPI = async (
  path: IById,
  params: IGetWalletHistoriesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IWalletHistory>> => {
  const { id } = path;
  const url = `${REST}/${id}/${HISTORY}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const getListEarnEventsAPI = async (
  params: IGetEarnEventParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IEarnEvent[]> => {
  const url = `${REST_EVENT}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const createWalletAPI = async (
  path: ICreateWalletPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { currencyCode } = path;
  const url = `${REST}/${currencyCode}`;

  return await post(url, null, null, userHeaders);
};

export const exchangeWalletAPI = async (
  payload: IExchangeWalletPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${CONVERT}`;

  return await post(url, payload, null, userHeaders);
};

export const applyRedeemAPI = async (
  path: IApplyRedeemPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { redeemCode, walletId } = path;

  const url = `${REST}/${walletId}/${APPLY_REDEEM}/${redeemCode}`;

  return await post(url, null, null, userHeaders);
};

export const addMoneyAPI = async (
  params: IAddMoneyPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${ADD_MONEY}`;

  return await post(
    url,
    null,
    {
      params,
    },
    userHeaders,
  );
};

export const closeWalletAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${CLOSE}`;

  return await put(url, null, null, userHeaders);
};
