import { axiosInstanceJfw } from '../config/axios/axiosClient';
import {
  IBrandEmail,
  IBrandInfo,
  IBrandLink,
  IById,
  IGetBrandInfoPath,
  IGetListBrandLinksPath,
} from '../models/interfaces';

const REST = 'brands';
const BY_URL = 'by-url';
const EMAIL = 'emails';
const LINK = 'links';

export const getListBrandEmailsAPI = async (
  path: IById,
): Promise<IBrandEmail> => {
  const { id } = path;
  const url = `v1/${REST}/${id}/${EMAIL}`;
  const response = await axiosInstanceJfw.get(url);
  return response.data;
};

export const getBrandByUrlAPI = async (
  path: IGetBrandInfoPath,
): Promise<IBrandInfo> => {
  const { brandUrl } = path;
  const url = `v1/${REST}/${BY_URL}/${brandUrl}`;
  const response = await axiosInstanceJfw.get(url);
  return response.data;
};

export const getListBrandLinksAPI = async (
  path: IGetListBrandLinksPath,
): Promise<IBrandLink[]> => {
  const { id, type } = path;
  const url = `${REST}/${id}/${LINK}/load-type/${type}`;
  const response = await axiosInstanceJfw.get(url);
  return response.data;
};
