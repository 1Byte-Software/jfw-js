import {
  IById,
  IGetListTrackingActivitiesParams,
  IListResponse,
  ISaveActivitiesRequest,
  ITrackingActivity,
} from '../models/interfaces';
import { get, post } from '../utils/axiosHelper';

const REST = 'tracking-activities';
const REST_URL_TRACKING = 'tracking';

export const getListTrackingActivitiesAPI = async (
  params: IGetListTrackingActivitiesParams,
): Promise<IListResponse<ITrackingActivity>> => {
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

export const getActivityDetailsAPI = async (
  path: IById,
): Promise<ITrackingActivity> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const saveTrackingActivitiesAPI = async (
  payload: ISaveActivitiesRequest,
) => {
  const url = `${REST_URL_TRACKING}-activities`;
  const response = await post(url, payload);
  return response.data;
};
