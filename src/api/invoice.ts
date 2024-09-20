import { RawAxiosRequestHeaders } from 'axios';
import { IById, IGetListInvoicesParams, IInvoice } from '../models/interfaces';
import { get } from '../utils/axiosHelper';

const REST = 'invoices';
const EXPORT = 'export';

export const getListInvoicesAPI = async (
  params: IGetListInvoicesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IInvoice[]> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const exportInvoiceAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${id}/${EXPORT}`;
  const response = await get(
    url,
    {
      responseType: 'blob',
    },
    userHeaders,
  );

  return response;
};
