import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddIssueCategoryPayload,
  IByCode,
  IById,
  IGetListIssueCategoriesParams,
  IIssueCategory,
} from '../models';
import { get, patch, post, remove } from '../utils/axiosHelper';

const REST = 'issue-categories';

export const getListIssueCategoriesAPI = async (
  params: IGetListIssueCategoriesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IIssueCategory[]> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const getIssueTypeDetailsAPI = async (
  path: IById,
): Promise<IIssueCategory> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const addIssueTypeAPI = async (payload: IAddIssueCategoryPayload) => {
  const url = `${REST}`;
  const response = await post(url, payload);

  return response.data;
};

export const editIssueTypeAPI = async (
  path: IByCode,
  payload: IAddIssueCategoryPayload,
) => {
  const { code } = path;
  const url = `${REST}/${code}`;
  const response = await patch(url, payload);

  return response.data;
};

export const deleteIssueTypeAPI = async (path: IByCode) => {
  const { code } = path;
  const url = `${REST}/${code}`;

  const response = await remove(url);

  return response.data;
};
