import { RawAxiosRequestHeaders } from 'axios';
import {
  IByCode,
  IById,
  ICreateIssuePayload,
  IGetListIssuesParams,
  IIssue,
  IListResponse,
} from '../models/interfaces';
import { get, patch, post, remove } from '../utils/axiosHelper';
import { IdType } from '../models';

const REST = 'issues';
const BY_LIST = 'by-list';
const CHILDREN = 'children';

export const createIssueAPI = async (
  payload: ICreateIssuePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}`;

  return await post(url, payload, null, userHeaders);
};

export const getListIssuesAPI = async (
  params?: IGetListIssuesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IIssue>> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);
  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const deleteIssueAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  return await remove(url, userHeaders);
};

export const getListIssuesByIdsAPI = async (
  path: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponse<IIssue>> => {
  const url = `${REST}/${BY_LIST}?${path}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListIssueChildrenAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IIssue[]> => {
  const url = `${REST}/${id}/${CHILDREN}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getIssueDetailsAPI = async (path: IByCode): Promise<IIssue> => {
  const { code } = path;
  const url = `${REST}/${code}`;
  const response = await get(url);

  return response.data;
};

export const editIssueAPI = async (
  path: IByCode,
  payload: ICreateIssuePayload,
) => {
  const { code } = path;
  const url = `${REST}/${code}`;
  const response = await patch(url, payload);

  return response.data;
};
