import { get, post } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponse, IdType } from '../base';
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
): Promise<IListResponse<ITrackingActivity>> => {
    const url = TRACKING_ACTIVITY_PATH.QUERY;

    const response = await get(url, {
        params,
    });

    const { items, ...rest } = response.data;

    return {
        items,
        pagination: rest,
    };
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
