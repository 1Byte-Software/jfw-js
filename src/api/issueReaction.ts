import { RawAxiosRequestHeaders } from 'axios';
import { IAddReactionPayload, IDeleteReactionPath } from '../models';
import { post, remove } from '../utils/axiosHelper';

const REST = 'issue-reactions';

export const createIssueReactionAPI = async (
  payload: IAddReactionPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}`;

  return await post(url, payload, null, userHeaders);
};

export const deleteIssueReactionAPI = async (
  path: IDeleteReactionPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}`;

  return await remove(url, userHeaders);
};
