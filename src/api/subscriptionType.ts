import {
  IAddSubscriptionTypePayload,
  IById,
  IGetListSubscriptionTypesParams,
  IListResponse,
  ISubscriptionType,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'subscription-types';

export const getListSubscriptionTypesAPI = async (
  params?: IGetListSubscriptionTypesParams,
): Promise<IListResponse<ISubscriptionType>> => {
  const url = `${REST}`;
  const response = await get(url, { params });
  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getSubscriptionTypeDetailsAPI = async (
  path: IById,
): Promise<ISubscriptionType> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addSubscriptionTypeAPI = async (
  payload: IAddSubscriptionTypePayload,
) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editSubscriptionTypeAPI = async (
  path: IById,
  payload: IAddSubscriptionTypePayload,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const deleteSubscriptionTypeAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url);

  return response.data;
};
