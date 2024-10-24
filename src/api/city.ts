import {
  IById,
  ICity,
  IGetListCountriesParams,
  IListResponse,
} from '../models';
import { get } from '../utils/axiosHelper';

const REST = 'cities';

// Cities
export const getListCitiesAPI = async (
  params?: IGetListCountriesParams,
): Promise<IListResponse<ICity>> => {
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

export const getCityDetailsAPI = async (path: IById): Promise<ICity> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};
