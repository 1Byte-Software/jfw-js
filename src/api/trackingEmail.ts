import {
  IGetListTrackingEmailsParams,
  IListResponse,
  ITrackingEmail,
} from '../models';
import { get } from '../utils/axiosHelper';

const REST = 'tracking-emails';

export const getListTrackingEmailsAPI = async (
  params: IGetListTrackingEmailsParams,
): Promise<IListResponse<ITrackingEmail>> => {
  const url = `${REST}`;
  const response = await get(url, {
    params,
  });

  const { items, ...rest } = response.data;

  return {
    items,
    pagination: rest,
  };
};
