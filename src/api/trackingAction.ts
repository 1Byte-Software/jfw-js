import { IGetListTrackingEventParams, ITrackingAction } from '../models';
import { get } from '../utils/axiosHelper';

const REST = 'tracking-events';

export const getListTrackingEventsAPI = async (
  params?: IGetListTrackingEventParams,
): Promise<ITrackingAction[]> => {
  const url = `${REST}`;
  const response = await get(url, {
    params,
  });

  return response.data;
};
