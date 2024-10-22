import {
  IAddPaymentMethodPayload,
  IById,
  IGetListPaymentMethodsParams,
  IGetListPaymentProvidersParams,
  IGetPaymentHistoriesParams,
  IGetPaymentOverviewParams,
  IListResponse,
  IPaymentHistory,
  IPaymentMethod,
  IPaymentOverview,
  IPaymentProvider,
  IStatistic,
  IStatisticCommonParams,
} from '../models/interfaces';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST_PAYMENT_METHOD = 'payment-methods';
const REST_PAYMENT_PROVIDERS = 'payment-providers';
const REST_PAYMENT = 'payments';

// Payment Histories
export const getPaymentHistoriesAPI = async (
  params: IGetPaymentHistoriesParams,
): Promise<IListResponse<IPaymentHistory>> => {
  const url = `${REST_PAYMENT}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getPaymentDetailsAPI = async (
  path: IById,
): Promise<IPaymentHistory> => {
  const { id } = path;
  const url = `${REST_PAYMENT}/${id}`;
  const response = await get(url);

  return response.data;
};

// Payment Methods
export const getListPaymentMethodsAPI = async (
  params: IGetListPaymentMethodsParams,
): Promise<IListResponse<IPaymentMethod>> => {
  const url = `${REST_PAYMENT_METHOD}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getPaymentMethodDetailsAPI = async (
  path: IById,
): Promise<IPaymentMethod> => {
  const { id } = path;
  const url = `${REST_PAYMENT_METHOD}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addPaymentMethodAPI = async (
  payload: IAddPaymentMethodPayload,
) => {
  const url = `${REST_PAYMENT_METHOD}`;

  return await post(url, payload);
};

export const editPaymentMethodAPI = async (
  path: IById,
  payload: IAddPaymentMethodPayload,
) => {
  const { id } = path;
  const url = `${REST_PAYMENT_METHOD}/${id}`;

  return await put(url, payload);
};

export const deletePaymentMethodAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST_PAYMENT_METHOD}/${id}`;

  return await remove(url);
};

// Payment Providers
export const getListPaymentProvidersAPI = async (
  params?: IGetListPaymentProvidersParams,
): Promise<IListResponse<IPaymentProvider>> => {
  const url = `${REST_PAYMENT_PROVIDERS}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const paymentStatisticAPI = async (
  params: IStatisticCommonParams,
): Promise<IStatistic[]> => {
  const url = `${REST_PAYMENT}/statistics`;
  const response = await get(url, {
    params,
  });

  return response.data;
};

export const getPaymentDashboardAPI = async (
  params: IGetPaymentOverviewParams,
): Promise<IPaymentOverview> => {
  const url = `${REST_PAYMENT}/dashboard`;
  const response = await get(url, {
    params,
  });

  return response.data;
};
