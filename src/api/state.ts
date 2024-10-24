import {
  IById,
  IGetListCountriesParams,
  IListResponse,
  IState,
} from '../models';
import { get } from '../utils/axiosHelper';

const REST = 'states';

// State
export const getListStatesAPI = async (
  params?: IGetListCountriesParams,
): Promise<IListResponse<IState>> => {
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

export const getStateDetailsAPI = async (path: IById): Promise<IState> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};
