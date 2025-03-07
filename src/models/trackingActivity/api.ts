import { HttpResponseList } from '../../core';
import { get, post } from '../../utils/axiosHelper222';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { TRACKING_ACTIVITY_PATH } from './paths';
import {
    ICreateTrackingActivityParams,
    IQueryTrackingActivityParams,
    ITrackingActivity,
} from './types';

/**
 * Gets the activities by the specified filter.
 */
export const queryTrackingActivityAPI = async (
    params?: IQueryTrackingActivityParams,
): Promise<HttpResponseList<ITrackingActivity>> => {
    const url = TRACKING_ACTIVITY_PATH.QUERY;

    const response = await get(url, {
        params,
    });

    return response.data
};

/**
 * Gets the activity by the id.
 */
export const getTrackingActivityByIdAPI = async (
    trackingActivityId: IdType,
): Promise<ITrackingActivity> => {
    const url = generatePath(TRACKING_ACTIVITY_PATH.GET_BY_ID, {
        id: trackingActivityId,
    });
    const response = await get(url);

    return response.data;
};

/**
 * #JFW-81: Thiếu tài liệu POST: api/tracking-activities
 */
export const createTrackingActivityAPI = async (
    params: ICreateTrackingActivityParams,
) => {
    const url = TRACKING_ACTIVITY_PATH.CREATE;
    const response = await post(url, params);
    return response.data;
};
