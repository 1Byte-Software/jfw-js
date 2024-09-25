import { RawAxiosRequestHeaders } from 'axios';
import { IById, IGenerateCheckoutLinkParams } from '../models/interfaces';
import { post } from '../utils/axiosHelper';

const REST = 'prices';
const LINK = 'generate-checkout-link';

export const generateCheckoutLink = async (
  path: IById,
  params: IGenerateCheckoutLinkParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${LINK}`;
  const response = await post(
    url,
    null,
    {
      params,
    },
    userHeaders,
  );
  return response.data;
};
