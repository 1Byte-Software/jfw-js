import { AxiosRequestConfig } from 'axios';
import { ICdn } from '../models';
import { post } from '../utils/axiosHelper';

const REST = 'cdn';
const UPLOAD = 'upload-file';

export const cdnUploadFileAPI = async (
  payload: FormData,
  configArg: AxiosRequestConfig = {
    headers: {},
  },
): Promise<ICdn> => {
  const url = `${REST}/${UPLOAD}`;

  if (!configArg.headers?.['Content-Type'])
    configArg.headers ?? (configArg.headers = {});

  configArg.headers['Content-Type'] = 'multipart/form-data';

  const response = await post(url, payload, configArg);

  return response.data;
};
