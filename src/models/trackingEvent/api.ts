import { get } from '../../utils/axiosHelper222';
import { TRACKING_EVENT_PATH } from './paths';
import { IQueryTrackingEventParams, ITrackingEvent } from './types';

/**
 * Get events
 */
export const queryTrackingEventAPI = async (
    params?: IQueryTrackingEventParams,
): Promise<ITrackingEvent[]> => {
    const url = TRACKING_EVENT_PATH.QUERY;
    const response = await get(url, {
        params,
    });

    return response.data;
};
