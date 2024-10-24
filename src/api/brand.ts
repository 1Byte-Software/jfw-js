import { AxiosHeaders } from 'axios';
import {
  IAddBrandLinkPayload,
  IBrandEmail,
  IBrandInfo,
  IBrandLink,
  IBrandProfile,
  IBrandSetting,
  IById,
  IEditBrandPayload,
  IEditEmailsPayload,
  IGetBrandInfoPath,
  IGetBrandLinksParams,
  IGetListBrandLinksPath,
  IGetListBrandsParams,
} from '../models/interfaces';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'brands';
const REST_V1 = 'v1/brands';
const BY_URL = 'by-url';
const EMAIL = 'emails';
const LINK = 'links';
const LOAD_TYPE = 'load-type';
const PROFILE = 'profile';
const SETTING = 'setting';

// Brand
export const getBrandByUrlAPI = async (
  path: IGetBrandInfoPath,
  userHeaders?: AxiosHeaders,
): Promise<IBrandInfo> => {
  const { brandUrl } = path;
  const url = `v1/${REST}/${BY_URL}/${brandUrl}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListBrandsAPI = async (
  params?: IGetListBrandsParams,
): Promise<IBrandInfo[]> => {
  const url = `${REST_V1}`;
  const response = await get(url, {
    params,
  });

  return response.data;
};

export const getBrandDetailAPI = async (path: IById): Promise<IBrandInfo> => {
  const { id } = path;
  const url = `${REST}/${id}`;
  const response = await get(url);

  return response.data;
};

export const editBrandAPI = async (path: IById, payload: IEditBrandPayload) => {
  const { id } = path;
  const url = `${REST_V1}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const editBrandProfileAPI = async (
  path: IById,
  payload: IBrandProfile,
) => {
  const { id } = path;
  const url = `${REST_V1}/${id}/${PROFILE}`;
  const response = await put(url, payload);

  return response.data;
};

export const editBrandSettingsAPI = async (
  path: IById,
  payload: IBrandSetting,
) => {
  const { id } = path;
  const url = `${REST_V1}/${id}/${SETTING}`;
  const response = await put(url, payload);

  return response.data;
};

// Brand Emails
export const getListBrandEmailsAPI = async (
  path: IById,
  userHeaders?: AxiosHeaders,
): Promise<IBrandEmail> => {
  const { id } = path;
  const url = `v1/${REST}/${id}/${EMAIL}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const editBrandEmailsAPI = async (
  path: IById,
  payload: IEditEmailsPayload,
) => {
  const { id } = path;
  const url = `${REST}/${EMAIL}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

// Brand Links
export const getListBrandLinksAPI = async (
  path: IGetListBrandLinksPath,
  params?: IGetBrandLinksParams,
  userHeaders?: AxiosHeaders,
): Promise<IBrandLink[]> => {
  const { id, type } = path;
  const url = `${REST}/${id}/${LINK}/${LOAD_TYPE}/${type}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const addBrandLinkAPI = async (payload: IAddBrandLinkPayload) => {
  const url = `${REST_V1}/${LINK}`;
  const response = await post(url, payload);

  return response.data;
};

export const editBrandLinkAPI = async (
  path: IById,
  payload: IAddBrandLinkPayload,
) => {
  const { id } = path;
  const url = `${REST_V1}/${LINK}/${id}`;
  const response = await put(url, payload);

  return response.data;
};

export const getBrandLinkDetailsAPI = async (
  path: IById,
): Promise<IBrandLink> => {
  const { id } = path;
  const url = `${REST_V1}/${LINK}/${id}`;
  const response = await get(url);

  return response.data;
};

export const deleteBrandLinkAPI = async (path: IById) => {
  const { id } = path;
  const url = `${REST_V1}/links/${id}`;
  const response = await remove(url);

  return response.data;
};
