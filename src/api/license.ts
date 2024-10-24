import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddLicensePayload,
  IBuyLicenseCheckoutPayload,
  IBuyLicenseWalletParams,
  IBuyLicenseWalletPayload,
  IByCode,
  IDeleteLicensePath,
  IGenerateLicenseParams,
  IGetLicenseStatisticsParams,
  IGetListLicensesParams,
  ILicense,
  ILicenseStatistics,
  IListResponse,
  IMutateLicenseParams,
} from '../models/interfaces';
import { get, post, remove } from '../utils/axiosHelper';

const REST = 'licenses';
const REST_V1 = `v1/${REST}`;
const APPLY = 'apply';
const CHECK = 'check';
const GENERATE_KEY = 'generate-key';
const PURCHASE = 'purchase';
const CHECKOUT_LINK = `${PURCHASE}/checkout-link`;
const WALLET = `${PURCHASE}/wallet`;
const COUNT = 'count';
const STATISTIC = 'statistics/percentage-used';

export const getListLicensesV1API = async (
  params: IGetListLicensesParams,
): Promise<IListResponse<ILicense>> => {
  const url = `${REST_V1}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getLicenseDetailsAPI = async (
  path: IByCode,
): Promise<ILicense> => {
  const { code } = path;
  const url = `${REST_V1}/${code}`;
  const response = await get(url);

  return response.data;
};

export const addLicensesAPI = async (payload: IAddLicensePayload) => {
  const url = `${REST_V1}`;
  const response = await post(url, payload);
  return response.data;
};

export const deleteLicensesAPI = async (path: IDeleteLicensePath) => {
  const { licenseId } = path;
  const url = `${REST_V1}/${licenseId}`;
  const response = await remove(url);
  return response.data;
};

export const generateLicenseAPI = async (
  params: IGenerateLicenseParams,
): Promise<string> => {
  const url = `${REST_V1}/${GENERATE_KEY}`;

  const response = await get(url, {
    params,
  });

  return response.data;
};

export const buyLicensesPayPalAPI = async (
  payload: IBuyLicenseCheckoutPayload,
): Promise<string> => {
  const url = `${REST_V1}/${CHECKOUT_LINK}`;
  const response = await post(url, payload);
  return response.data;
};

export const buyLicensesWalletAPI = async (
  params: IBuyLicenseWalletParams,
  payload: IBuyLicenseWalletPayload,
): Promise<string> => {
  const url = `${REST_V1}/${WALLET}`;
  const response = await post(url, payload, {
    params,
  });
  return response.data;
};

export const getTotalPurchaseMonthAPI = async (): Promise<number> => {
  const url = `${REST_V1}/${COUNT}`;

  const response = await get(url);

  return response.data;
};

export const getLicenseStatisticsAPI = async (
  params: IGetLicenseStatisticsParams,
): Promise<ILicenseStatistics> => {
  const url = `${REST_V1}/${STATISTIC}`;
  const response = await get(url, {
    params,
  });

  return response.data;
};

export const checkValidLicenseAPI = async (
  params: IMutateLicenseParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${CHECK}`;

  return await get(url, { params }, userHeaders);
};

export const applyLicenseAPI = async (
  params: IMutateLicenseParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { licenseKey } = params;
  const url = `${REST}/${APPLY}`;

  return await post(
    url,
    null,
    {
      params: {
        licenseKey,
      },
    },
    userHeaders,
  );
};
