import { RawAxiosRequestHeaders } from 'axios';
import { IPackage } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'packages';

export const getListPackagesAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IPackage[]> => {
  const url = `${REST}`;
  const response = await get(url, null, userHeaders);
  return response.data;
};
