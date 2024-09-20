import { RawAxiosRequestHeaders } from 'axios';
import { post } from '../utils/axiosHelper';

const REST = 'cdn';
const UPLOAD = 'upload-file';

export const cdnUploadFileAPI = async (
  payload: FormData,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${UPLOAD}`;
  const response = await post(
    url,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
    userHeaders,
  );

  return response.data;
};
