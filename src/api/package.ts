import { axiosInstanceJfw } from '../config/axios/axiosClient';
import { IPackage } from '../models/interfaces';

const REST = 'packages';

export const getListPackagesAPI = async () => {
  const url = `${REST}`;
  const response = await axiosInstanceJfw.get<IPackage[]>(url);
  return response.data;
};
