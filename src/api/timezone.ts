import { RawAxiosRequestHeaders } from 'axios';
import { IGetListTimezonesParams, ITimezone } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'timezones';

export const getListTimezonesAPI = async (
  params?: IGetListTimezonesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ITimezone[]> => {
  const url = `${REST}`;
  const response = await get(
    url,
    {
      params,
    },
    userHeaders,
  );
  return response.data;
};
