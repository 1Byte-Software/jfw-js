import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { TRACKING_ACTIVITY_PATH } from './paths';
import { IQueryTrackingActivityParams, ITrackingActivity } from './types';

/**
 * Gets the activities by the specified filter.
 *
 * @see {@link https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-activities}
 */
export const getTrackingActivitiesAPI = async (
    params?: IQueryTrackingActivityParams,
    config?: AxiosRequestConfig,
) => {
    const url = TRACKING_ACTIVITY_PATH.GET_ACTIVITIES;

    const response = await jfwAxios.get<HttpResponseList<ITrackingActivity>>(
        url,
        {
            params,
            ...config,
        },
    );

    return response.data;
};

/**
 * Get a tracking activity by the given id.
 */
export const getTrackingActivityAPI = async (
    id: IdType,
    config?: AxiosRequestConfig,
) => {
    const url = generatePath(TRACKING_ACTIVITY_PATH.GET_ACTIVITY, {
        id,
    });

    const response = await jfwAxios.get<HttpResponse<ITrackingActivity>>(
        url,
        config,
    );

    return response.data;
};
