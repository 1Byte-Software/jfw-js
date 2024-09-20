import { AxiosHeaders } from 'axios';
import {
  IBrandEmail,
  IBrandInfo,
  IBrandLink,
  IById,
  IGetBrandInfoPath,
  IGetListBrandLinksPath,
} from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'brands';
const BY_URL = 'by-url';
const EMAIL = 'emails';
const LINK = 'links';

export const getListBrandEmailsAPI = async (
  path: IById,
  userHeaders?: AxiosHeaders,
): Promise<IBrandEmail> => {
  const { id } = path;
  const url = `v1/${REST}/${id}/${EMAIL}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getBrandByUrlAPI = async (
  path: IGetBrandInfoPath,
  userHeaders?: AxiosHeaders,
): Promise<IBrandInfo> => {
  const { brandUrl } = path;
  const url = `v1/${REST}/${BY_URL}/${brandUrl}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListBrandLinksAPI = async (
  path: IGetListBrandLinksPath,
  userHeaders?: AxiosHeaders,
): Promise<IBrandLink[]> => {
  const { id, type } = path;
  const url = `${REST}/${id}/${LINK}/load-type/${type}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};
