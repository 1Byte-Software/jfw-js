import {
  IById,
  IEditFeaturePayload,
  IFeature,
  IGetListFeatureParams,
} from '../models';
import { get, patch, post, remove } from '../utils/axiosHelper';

const REST = 'features';

export const getListFeaturesAPI = async (
  params?: IGetListFeatureParams,
): Promise<IFeature[]> => {
  const url = `${REST}`;
  const response = await get(url, {
    params,
  });
  return response.data;
};

export const getFeatureDetailsAPI = async (path: IById): Promise<IFeature> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);
  return response.data;
};

export const addFeatureAPI = async (payload: IEditFeaturePayload) => {
  const url = `${REST}`;

  const response = await post(url, payload);

  return response.data;
};

export const editFeatureAPI = async (
  path: IById,
  payload: IEditFeaturePayload,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  const response = await patch(url, payload);

  return response.data;
};

export const deleteFeatureAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  const response = await remove(url);

  return response.data;
};
