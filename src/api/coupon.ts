import {
  IAddCouponPayload,
  IById,
  ICoupon,
  IGetListCouponsParams,
  IListResponse,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'coupons';

export const getListCouponsAPI = async (
  params: IGetListCouponsParams,
): Promise<IListResponse<ICoupon>> => {
  const url = `${REST}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getCouponDetailsAPI = async (path: IById): Promise<ICoupon> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addCouponAPI = async (payload: IAddCouponPayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editCouponAPI = async (
  path: IById,
  payload: IAddCouponPayload,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const deleteCouponAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url);

  return response.data;
};
