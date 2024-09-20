import { RawAxiosRequestHeaders } from 'axios';
import { ILanguage } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'languages';

export const getListLanguagesAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILanguage[]> => {
  const url = `${REST}`;
  const response = await get(url, null, userHeaders);
  return response.data;
};
