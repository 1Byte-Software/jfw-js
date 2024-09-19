import { axiosInstanceJfw } from '../config/axios/axiosClient';
import { IMutateLicenseParams } from '../models/interfaces';

const REST = 'licenses';
const APPLY = 'apply';
const CHECK = 'check';

export const checkValidLicenseAPI = async (params: IMutateLicenseParams) => {
  const url = `${REST}/${CHECK}`;

  return await axiosInstanceJfw.get(url, {
    params,
  });
};

export const applyLicenseAPI = async (params: IMutateLicenseParams) => {
  const { licenseKey } = params;
  const url = `${REST}/${APPLY}`;

  return await axiosInstanceJfw.post(url, null, {
    params: {
      licenseKey,
    },
  });
};
