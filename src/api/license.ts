import { RawAxiosRequestHeaders } from 'axios';
import { IMutateLicenseParams } from '../models/interfaces';
import { get, post } from '../utils/axiosHelper';

const REST = 'licenses';
const APPLY = 'apply';
const CHECK = 'check';

export const checkValidLicenseAPI = async (
  params: IMutateLicenseParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${CHECK}`;

  return await get(url, { params }, userHeaders);
};

export const applyLicenseAPI = async (
  params: IMutateLicenseParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { licenseKey } = params;
  const url = `${REST}/${APPLY}`;

  return await post(
    url,
    null,
    {
      params: {
        licenseKey,
      },
    },
    userHeaders,
  );
};
