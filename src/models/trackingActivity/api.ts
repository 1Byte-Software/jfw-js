import { AxiosRequestConfig } from 'axios';
import { HttpResponse, HttpResponseList } from '../../core';
import { jfwAxios } from '../../core/client/client';
import { generatePath } from '../../utils/path';
import { IdType } from '../base';
import { TRACKING_ACTIVITY_PATH } from './paths';
import { IGetTrackingActivitiesParams, ITrackingActivity } from './types';

export class TrackingActivityAPI {
    /**
     * # Get activities
     *
     * Get the list of tracking activities.
     *
     * @param params - The params for getting tracking activities.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-activities}
     */
    public async getTrackingActivities(
        params?: IGetTrackingActivitiesParams,
        config?: AxiosRequestConfig,
    ) {
        const url = TRACKING_ACTIVITY_PATH.GET_ACTIVITIES;
        const response = await jfwAxios.get<
            HttpResponseList<ITrackingActivity>
        >(url, {
            params,
            ...config,
        });

        return response.data;
    }

    /**
     * # Get a activity
     *
     * Get a tracking activity by the given id.
     *
     * @param id - The id of the activity.
     * @param config - Optional axios request configuration object.
     * @see {@link https://developers.jframework.io/references/api-reference/endpoints/tracking-activities/get-a-activity}
     */
    public async getTrackingActivity(id: IdType, config?: AxiosRequestConfig) {
        const url = generatePath(TRACKING_ACTIVITY_PATH.GET_ACTIVITY, {
            id,
        });
        const response = await jfwAxios.get<HttpResponse<ITrackingActivity>>(
            url,
            config,
        );

        return response.data;
    }
}
