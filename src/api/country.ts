import {
  IById,
  ICountry,
  IGetListCountriesParams,
  IListResponse,
} from '../models';
import { get } from '../utils/axiosHelper';

const REST = 'countries';

// Country
export const getListCountriesAPI = async (
  params?: IGetListCountriesParams,
): Promise<IListResponse<ICountry>> => {
  const url = REST;
  const response = await get(url, {
    params,
  });
  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};

export const getCountryDetailsAPI = async (path: IById): Promise<ICountry> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};
