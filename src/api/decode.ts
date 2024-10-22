import { IDecryptPayload, IEncryptPayload } from '../models';
import { post } from '../utils/axiosHelper';

const REST = 'cryptographies';
const ENCRYPT = `${REST}/encrypt`;
const DECRYPT = `${REST}/decrypt`;

export const encryptAPI = async (payload: IEncryptPayload): Promise<string> => {
  const url = ENCRYPT;
  const response = await post(url, payload);
  return response.data;
};

export const decryptAPI = async (payload: IDecryptPayload): Promise<string> => {
  const url = DECRYPT;
  const response = await post(url, payload);
  return response.data;
};
