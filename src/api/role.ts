import { RawAxiosRequestHeaders } from 'axios';
import { IRole } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'roles';

export const getListRolesAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IRole[]> => {
  const url = `${REST}`;
  const response = await get(url, null, userHeaders);
  return response.data;
};
