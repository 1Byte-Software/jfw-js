import { axiosInstanceJfw } from '../config/axios/axiosClient';
import { ITimezone } from '../models/interfaces';

const REST = 'timezones';

export const getListTimezonesAPI = async (): Promise<ITimezone[]> => {
  const url = `${REST}`;
  const response = await axiosInstanceJfw.get(url);
  return response.data;
};
