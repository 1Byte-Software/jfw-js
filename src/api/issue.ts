import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddReactionPayload,
  IById,
  ICreateIssuePayload,
  IDeleteReactionPath,
  IGetListIssueCategoriesParams,
  IGetListIssuesParams,
  IIssue,
  IIssueType,
  IListResponse,
} from '../models/interfaces';
import { get, post, remove } from '../utils/axiosHelper';

const REST = 'issues';
const BY_LIST = 'by-list';
const CHILDREN = 'children';
const REST_REACTION = 'issue-reactions';
const REST_TYPE = 'issue-types';

export const createIssueAPI = async (
  payload: ICreateIssuePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}`;

  return await post(url, payload, null, userHeaders);
};

export const getListIssuesAPI = async (
  params: IGetListIssuesParams,
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

export const createIssueReactionAPI = async (
  payload: IAddReactionPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_REACTION}`;

  return await post(url, payload, null, userHeaders);
};

export const deleteIssueReactionAPI = async (
  path: IDeleteReactionPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST_REACTION}/${id}`;

  return await remove(url, userHeaders);
};

export const getListIssueCategoriesAPI = async (
  params: IGetListIssueCategoriesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IIssueType[]> => {
  const url = `${REST_TYPE}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
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
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IIssue[]> => {
  const { id } = path;
  const url = `${REST}/${id}/${CHILDREN}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};
