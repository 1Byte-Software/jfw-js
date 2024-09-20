import { RawAxiosRequestHeaders } from 'axios';
import { IById, IGetDirectCheckoutLinkParams } from '../models/interfaces';
import { post } from '../utils/axiosHelper';

const REST = 'prices';
const LINK = 'generate-checkout-link';

export const getDirectCheckoutLink = async (
  path: IById,
  params: IGetDirectCheckoutLinkParams,
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
