import {
  IAddEmailPatternPayload,
  IById,
  IEmailPattern,
  IGetListEmailPatternsParams,
  IListResponse,
  IPlaceholderKey,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'email-address-patterns';
const PLACEHOLDER_KEYS = 'placeholder-keys';

export const getListEmailPatternsAPI = async (
  params: IGetListEmailPatternsParams,
): Promise<IListResponse<IEmailPattern>> => {
  const url = `${REST}`;
  const response = await get(url, {
    params,
  });

  return response.data;
};

export const getEmailPatternDetailsAPI = async (
  path: IById,
): Promise<IEmailPattern> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addEmailPatternAPI = async (payload: IAddEmailPatternPayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editEmailPatternAPI = async (
  path: IById,
  payload: IAddEmailPatternPayload,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const deleteEmailPatternAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await remove(url);

  return response.data;
};

export const getPlaceholderKeysAPI = async (): Promise<IPlaceholderKey> => {
  const url = `${REST}/${PLACEHOLDER_KEYS}`;
  const response = await get(url);

  return response.data;
};
