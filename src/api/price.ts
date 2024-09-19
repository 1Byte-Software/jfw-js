import { axiosInstanceJfw } from '../config/axios/axiosClient';
import { IById, IGetDirectCheckoutLinkParams } from '../models/interfaces';

const REST = 'prices';
const LINK = 'generate-checkout-link';

export const getDirectCheckoutLink = async (
  path: IById,
  params: IGetDirectCheckoutLinkParams,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${LINK}`;
  const response = await axiosInstanceJfw.post<string>(url, null, {
    params,
  });
  return response.data;
};
