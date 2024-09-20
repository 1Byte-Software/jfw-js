import { RawAxiosRequestHeaders } from 'axios';
import { ITimezone } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'timezones';

export const getListTimezonesAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ITimezone[]> => {
  const url = `${REST}`;
  const response = await get(url, null, userHeaders);
  return response.data;
};
