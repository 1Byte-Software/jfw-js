import { RawAxiosRequestHeaders } from 'axios';
import { ICheckUserAccessParams, IResponse } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'devices';
const USER_ACCESS = 'check-user-access';

export const checkUserAccessAPI = async (
  params: ICheckUserAccessParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<boolean>> => {
  const url = `v1/${REST}/${USER_ACCESS}`;
  const response = await get(url, { params }, userHeaders);

  return response;
};
